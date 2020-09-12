<?php

namespace App\Controller;

use Exception;
use App\Document\Experience;
use App\Form\ExperienceType;
use Doctrine\ODM\MongoDB\DocumentManager;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/experience", name="admin_experiences_")
 */
class ExperienceController extends AbstractController
{
    private $expRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->expRepo = $dm->getRepository(Experience::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $title = '';
        $company = '';
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
            $company = $decodedData['company'];
            $link = $decodedData['link'];
            $location = $decodedData['location'];
            $description = $decodedData['description'];
            $date_start = $decodedData['date_start'];
            $date_end = $decodedData['date_end'];
            $order = $decodedData['order'];

            $experience = new Experience();

            $experience->setTitle($title);
            $experience->setCompany($company);
            $experience->setCompanyLink($link);
            $experience->setLocation($location);
            $experience->setDescription($description);
            $experience->setDate_start($date_start);
            $experience->setDate_end($date_end);
            $experience->setList_order($order);

            try {
                $this->dm->persist($experience);
                $this->dm->flush();

                $experiences = $this->expRepo->findAll();

                $serializedExperiences = $this->serializer->serialize($experiences, 'json');

                $response = new Response($serializedExperiences);
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
        $company = '';
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
            $company = $decodedData['company'];
            $link = $decodedData['link'];
            $location = $decodedData['location'];
            $description = $decodedData['description'];
            $date_start = $decodedData['date_start'];
            $date_end = $decodedData['date_end'];
            $order = $decodedData['order'];

            $experience = $this->expRepo->find($id);

            $experience->setTitle($title);
            $experience->setCompany($company);
            $experience->setCompanyLink($link);
            $experience->setLocation($location);
            $experience->setDescription($description);
            $experience->setDate_start($date_start);
            $experience->setDate_end($date_end);
            $experience->setList_order($order);

            try {
                $this->dm->flush();

                $experiences = $this->expRepo->findAll();

                $serializedExperiences = $this->serializer->serialize($experiences, 'json');

                $response = new Response($serializedExperiences);
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
            $experience = $this->expRepo->find($id);

            try {
                $this->dm->remove($experience);
                $this->dm->flush();

                $experiences = $this->expRepo->findAll();

                $serializedExperiences = $this->serializer->serialize($experiences, 'json');

                $response = new Response($serializedExperiences);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
