<?php

namespace App\Controller;

use Exception;
use App\Document\Skill;
use App\Form\SkillType;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/skill", name="admin_skills_")
 */
class SkillController extends AbstractController
{
    private $skillRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->skillRepo = $dm->getRepository(Skill::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $name = '';
        $level = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $name = $decodedData['name'];
            $level = $decodedData['level'];

            $skill = new Skill();

            $skill->setName($name);
            $skill->setLevel($level);

            try {
                $this->dm->persist($skill);
                $this->dm->flush();

                $skills = $this->skillRepo->findAll();

                $serializedSkills = $this->serializer->serialize($skills, 'json');

                $response = new Response($serializedSkills);
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
        $level = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $name = $decodedData['name'];
            $level = $decodedData['level'];

            $skill = $this->skillRepo->find($id);

            $skill->setName($name);
            $skill->setLevel($level);

            try {
                $this->dm->flush();

                $skills = $this->skillRepo->findAll();

                $serializedSkills = $this->serializer->serialize($skills, 'json');

                $response = new Response($serializedSkills);
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
            $skill = $this->skillRepo->find($id);

            try {
                $this->dm->remove($skill);
                $this->dm->flush();

                $skills = $this->skillRepo->findAll();

                $serializedSkills = $this->serializer->serialize($skills, 'json');

                $response = new Response($serializedSkills);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
