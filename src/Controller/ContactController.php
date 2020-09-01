<?php

namespace App\Controller;

use App\Document\Contact;
use App\Form\ContactType;
use App\Repository\ContactRepository;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/contacts", name="admin_contacts_")
 */
class ContactController extends AbstractController
{
    private $contactRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->contactRepo = $dm->getRepository(Contact::class);
    }
    /**
     * @Route("/", name="list")
     */
    public function index(Request $request)
    {
        $contacts = $contactRepo->findAll();

        $contact = new Contact();

        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($contact);
            $this->dm->flush();

            $this->addFlash('success', 'Contact ajouté');

            return $this->redirectToRoute('admin_contacts_list');
        }

        return $this->render('admin/contact/index.html.twig', [
            'contacts' => $contacts,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show(Contact $contact, Request $request)
    {
        if(!$contact) throw $this->createNotFoundException('Contact introuvable');

        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($contact);
            $this->dm->flush();

            $this->addFlash('success', 'Contact mis à jour');

            return $this->redirectToRoute('admin_contacts_list');
        }

        return $this->render('admin/contact/show.html.twig', [
            'contact' => $contact,
            'form_contact' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Contact $contact)
    {
        if(!$contact) throw $this->createNotFoundException('Contact introuvable');

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($contact);
        $this->dm->flush();

        $this->addFlash('success', 'Contact supprimée');

        return $this->redirectToRoute('admin_home');
    }
}
