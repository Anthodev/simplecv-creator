<?php

namespace App\Controller;

use Exception;
use App\Document\Training;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/training", name="admin_trainings_")
 */
class TrainingController extends AbstractController
{
    private $trainingRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->trainingRepo = $dm->getRepository(Training::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $title = '';
        $school = '';
        $link = '';
        $location = '';
        $description = '';
        $date_start = '';
        $date_end = '';
        $order = 0;

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $title = $decodedData['title'];
            $school = $decodedData['training'];
            $link = $decodedData['link'];
            $location = $decodedData['location'];
            $description = $decodedData['description'];
            $date_start = $decodedData['date_start'];
            $date_end = $decodedData['date_end'];
            $order = $decodedData['order'];

            $training = new Training();

            $training->setTitle($title);
            $training->setTraining($school);
            $training->setTrainingLink($link);
            $training->setLocation($location);
            $training->setDescription($description);
            $training->setDate_start($date_start);
            $training->setDate_end($date_end);
            $training->setList_order($order);

            try {
                $this->dm->persist($training);
                $this->dm->flush();

                $trainings = $this->trainingRepo->findAll();

                $serializedTrainings = $this->serializer->serialize($trainings, 'json');

                $response = new Response($serializedTrainings);
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
        $title = '';
        $school = '';
        $link = '';
        $location = '';
        $description = '';
        $date_start = '';
        $date_end = '';
        $order = 0;

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $title = $decodedData['title'];
            $school = $decodedData['training'];
            $link = $decodedData['link'];
            $location = $decodedData['location'];
            $description = $decodedData['description'];
            $date_start = $decodedData['date_start'];
            $date_end = $decodedData['date_end'];
            $order = $decodedData['order'];

            $training = $this->trainingRepo->find($id);

            $training->setTitle($title);
            $training->setTraining($school);
            $training->setTrainingLink($link);
            $training->setLocation($location);
            $training->setDescription($description);
            $training->setDate_start($date_start);
            $training->setDate_end($date_end);
            $training->setList_order($order);

            try {
                $this->dm->flush();

                $trainings = $this->trainingRepo->findAll();

                $serializedTrainings = $this->serializer->serialize($trainings, 'json');

                $response = new Response($serializedTrainings);
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
            $training = $this->trainingRepo->find($id);

            try {
                $this->dm->remove($training);
                $this->dm->flush();

                $trainings = $this->trainingRepo->findAll();

                $serializedTrainings = $this->serializer->serialize($trainings, 'json');

                $response = new Response($serializedTrainings);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
