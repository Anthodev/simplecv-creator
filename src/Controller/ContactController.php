<?php

namespace App\Controller;

use Exception;
use App\Document\Contact;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/contact")
 */
class ContactController extends AbstractController
{
    private $contactRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->contactRepo = $dm->getRepository(Contact::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/add", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function add(Request $request)
    {
        $name = '';
        $link = '';
        $icon = '';
        $order = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $name = $decodedData['name'];
            $link = $decodedData['link'];
            $icon = $decodedData['icon'];
            $order = $decodedData['order'];

            $contact = new Contact();

            $contact->setName($name);
            $contact->setLink($link);
            $contact->setIcon($icon);
            $contact->setContactOrder($order);

            try {
                $this->dm->persist($contact);
                $this->dm->flush();

                $contacts = $this->contactRepo->findAll();

                $serializedContacts = $this->serializer->serialize($contacts, 'json');

                $response = new Response($serializedContacts);
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
        $link = '';
        $icon = '';
        $order = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $id = $decodedData['id'];
            $name = $decodedData['name'];
            $link = $decodedData['link'];
            $icon = $decodedData['icon'];
            $order = $decodedData['order'];

            $contact = $this->contactRepo->find($id);

            $contact->setName($name);
            $contact->setLink($link);
            $contact->setIcon($icon);
            $contact->setContactOrder($order);

            try {
                $this->dm->flush();

                $contacts = $this->contactRepo->findAll();

                $serializedContacts = $this->serializer->serialize($contacts, 'json');

                $response = new Response($serializedContacts);
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
            $contact = $this->contactRepo->find($id);

            try {
                $this->dm->remove($contact);
                $this->dm->flush();

                $contacts = $this->contactRepo->findAll();

                $serializedContacts = $this->serializer->serialize($contacts, 'json');

                $response = new Response($serializedContacts);
                $response->setStatusCode(Response::HTTP_OK);
                $response->headers->set('Content-Type', 'application/json');

                return $response;
            } catch (Exception $e) {
                return new JsonResponse(\json_encode($e), 500);
            }
        }
    }
}
