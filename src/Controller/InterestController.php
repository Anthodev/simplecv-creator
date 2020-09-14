<?php

namespace App\Controller;

use Exception;
use App\Document\Interest;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/interest", name="admin_interests_")
 */
class InterestController extends AbstractController
{
    private $interestRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->interestRepo = $dm->getRepository(Interest::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $name = '';
        $icon = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $name = $decodedData['name'];
            $icon = $decodedData['icon'];

            $interest = new Interest();

            $interest->setName($name);
            $interest->setIcon($icon);

            try {
                $this->dm->persist($interest);
                $this->dm->flush();

                $interests = $this->interestRepo->findAll();

                $serializedInterests = $this->serializer->serialize($interests, 'json');

                $response = new Response($serializedInterests);
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
        $icon = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $name = $decodedData['name'];
            $icon = $decodedData['icon'];

            $interest = $this->interestRepo->find($id);

            $interest->setName($name);
            $interest->setIcon($icon);

            try {
                $this->dm->flush();

                $interests = $this->interestRepo->findAll();

                $serializedInterests = $this->serializer->serialize($interests, 'json');

                $response = new Response($serializedInterests);
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
            $interest = $this->interestRepo->find($id);

            try {
                $this->dm->remove($interest);
                $this->dm->flush();

                $interests = $this->interestRepo->findAll();

                $serializedInterests = $this->serializer->serialize($interests, 'json');

                $response = new Response($serializedInterests);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
