<?php

namespace App\Controller;

use Exception;
use App\Document\Language;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/language")
 */
class LanguageController extends AbstractController
{
    private $languageRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->languageRepo = $dm->getRepository(Language::class);
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

            $language = new Language();

            $language->setName($name);
            $language->setLevel($level);

            try {
                $this->dm->persist($language);
                $this->dm->flush();

                $languages = $this->languageRepo->findAll();

                $serializedLanguages = $this->serializer->serialize($languages, 'json');

                $response = new Response($serializedLanguages);
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

            $language = $this->languageRepo->find($id);

            $language->setName($name);
            $language->setLevel($level);

            try {
                $this->dm->flush();

                $languages = $this->languageRepo->findAll();

                $serializedLanguages = $this->serializer->serialize($languages, 'json');

                $response = new Response($serializedLanguages);
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
            $language = $this->languageRepo->find($id);

            try {
                $this->dm->remove($language);
                $this->dm->flush();

                $languages = $this->languageRepo->findAll();

                $serializedLanguages = $this->serializer->serialize($languages, 'json');

                $response = new Response($serializedLanguages);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
