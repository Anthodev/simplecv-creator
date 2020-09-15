<?php

namespace App\Controller;

use Exception;
use App\Document\Soft;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/soft", name="admin_softs_")
 */
class SoftController extends AbstractController
{
    private $softRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->softRepo = $dm->getRepository(Soft::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $name = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $name = $decodedData['name'];

            $soft = new Soft();

            $soft->setName($name);

            try {
                $this->dm->persist($soft);
                $this->dm->flush();

                $softs = $this->softRepo->findAll();

                $serializedSofts = $this->serializer->serialize($softs, 'json');

                $response = new Response($serializedSofts);
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

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $name = $decodedData['name'];

            $soft = $this->softRepo->find($id);

            $soft->setName($name);

            try {
                $this->dm->flush();

                $softs = $this->softRepo->findAll();

                $serializedSofts = $this->serializer->serialize($softs, 'json');

                $response = new Response($serializedSofts);
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
            $soft = $this->softRepo->find($id);

            try {
                $this->dm->remove($soft);
                $this->dm->flush();

                $softs = $this->softRepo->findAll();

                $serializedSofts = $this->serializer->serialize($softs, 'json');

                $response = new Response($serializedSofts);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
