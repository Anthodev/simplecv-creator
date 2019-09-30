<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\ContactRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin-cv/contacts", name="contacts_")
 */
class ContactController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(ContactRepository $contactRepo, Request $request)
    {
        $contacts = $contactRepo->findAll();

        $contact = new Contact();

        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();

            $this->addFlash('success', 'Contact ajoutée');

            return $this->redirectToRoute('admin_contacts_home');
        }

        return $this->render('contact/index.html.twig', [
            'contacts' => $contacts,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show(Contact $contact, Request $request)
    {
        if(!$contact) throw $this->createNotFoundException('Expérience introuvable');

        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();

            $this->addFlash('success', 'Contact mis à jour');

            return $this->redirectToRoute('admin_contacts_home');
        }

        return $this->render('contact/show.html.twig', [
            'form_contact' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Contact $contact)
    {
        if(!$contact) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($contact);
        $em->flush();

        $this->addFlash('success', 'Contact supprimée');

        return $this->redirectToRoute('admin_contacts_home');
    }
}
