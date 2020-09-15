<?php

namespace App\Controller;

use Exception;
use App\Document\Portfolio;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

/**
* @Route("/api/portfolio", name="admin_portfolio_")
*/
class PortfolioController extends AbstractController
{
    private $portfolioRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->portfolioRepo = $dm->getRepository(Portfolio::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $name = '';
        $image = '';
        $caption = '';
        $description = '';
        $type = '';
        $order = 0;

        $data = $request->getContent();

        if (isset($data)) {
            $name = $request->get('name');
            $image = $request->files->get('image');
            $caption = $request->get('caption');
            $description = $request->get('description');
            $type = $request->get('type');
            $order = $request->get('order');

            $portfolio = new Portfolio();

            $portfolio->setName($name);
            $portfolio->setCaption($caption);
            $portfolio->setDescription($description);
            $portfolio->setType($type);
            $portfolio->setList_order($order);

            try {
                if (!empty($image) || !is_null($image)) {
                    $filename = $this->generateUniqueFilename() . '.' . $image->guessExtension();

                    try {
                        $image->move(
                            $this->getParameter('images_directory'),
                            $filename
                        );
                    } catch (FileException $e) {
                        dump($e);
                    }
                    $portfolio->setImage($filename);
                }

                $this->dm->persist($portfolio);
                $this->dm->flush();

                $portfolios = $this->portfolioRepo->findAll();

                $serializedPortfolios = $this->serializer->serialize($portfolios, 'json');

                $response = new Response($serializedPortfolios);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        } else return new JsonResponse("No data sent.", 417);
    }

    /**
     * @Route("/edit", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function edit(Request $request)
    {
        $id = null;
        $name = '';
        $image = '';
        $caption = '';
        $description = '';
        $type = '';
        $order = 0;

        $data = $request->getContent();

        if (isset($data)) {
            $id = $request->get('id');
            $name = $request->get('name');
            $image = $request->files->get('image');
            $caption = $request->get('caption');
            $description = $request->get('description');
            $type = $request->get('type');
            $order = $request->get('order');

            $portfolio = $this->portfolioRepo->find($id);

            $oldImage = $portfolio->getImage();

            $portfolio->setName($name);
            $portfolio->setCaption($caption);
            $portfolio->setDescription($description);
            $portfolio->setType($type);
            $portfolio->setList_order($order);

            try {
                if (!empty($image) || !is_null($image)) {
                    $filename = $this->generateUniqueFilename() . '.' . $image->guessExtension();

                    try {
                        $image->move(
                            $this->getParameter('images_directory'),
                            $filename
                        );
                    } catch (FileException $e) {
                        // dump($e);
                        return new JsonResponse(\json_encode($e), 500);
                    }

                    if ($oldImage != null || $oldImage != '') {
                        $filesystem = new Filesystem();
                        $filesystem->remove($this->getParameter('images_directory') . '/' . $oldImage);
                    }

                    $portfolio->setImage($filename);
                } else {
                    $portfolio->setImage($oldImage);
                }
                
                $this->dm->flush();

                $portfolios = $this->portfolioRepo->findAll();

                $serializedPortfolios = $this->serializer->serialize($portfolios, 'json');

                $response = new Response($serializedPortfolios);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        } else return new JsonResponse("No data sent.", 417);
    }

    /**
     * @Route("/delete", name="delete", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function delete(Request $request)
    {
        $id = null;

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $portfolio = $this->portfolioRepo->find($id);

            try {
                $this->dm->remove($portfolio);
                $this->dm->flush();

                $portfolios = $this->portfolioRepo->findAll();

                $serializedPortfolios = $this->serializer->serialize($portfolios, 'json');

                $response = new Response($serializedPortfolios);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }

    /**
     * @return string
     */
    private function generateUniqueFileName()
    {
        // md5() reduces the similarity of the file names generated by
        // uniqid(), which is based on timestamps
        return md5(uniqid());
    }
}
