<?php

namespace App\Controller;

use Exception;
use App\Document\Aptitude;
use Doctrine\ODM\MongoDB\DocumentManager;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/aptitude", name="admin_aptitudes_")
 */
class AptitudeController extends AbstractController
{
    private $aptitudeRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->aptitudeRepo = $dm->getRepository(Aptitude::class);
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

            $aptitude = new Aptitude();

            $aptitude->setName($name);

            try {
                $this->dm->persist($aptitude);
                $this->dm->flush();

                $aptitudes = $this->aptitudeRepo->findAll();

                $serializedAptitudes = $this->serializer->serialize($aptitudes, 'json');

                $response = new Response($serializedAptitudes);
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

            $aptitude = $this->aptitudeRepo->find($id);

            $aptitude->setName($name);

            try {
                $this->dm->flush();

                $aptitudes = $this->aptitudeRepo->findAll();

                $serializedAptitudes = $this->serializer->serialize($aptitudes, 'json');

                $response = new Response($serializedAptitudes);
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
            $aptitude = $this->aptitudeRepo->find($id);

            try {
                $this->dm->remove($aptitude);
                $this->dm->flush();

                $aptitudes = $this->aptitudeRepo->findAll();

                $serializedAptitudes = $this->serializer->serialize($aptitudes, 'json');

                $response = new Response($serializedAptitudes);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
