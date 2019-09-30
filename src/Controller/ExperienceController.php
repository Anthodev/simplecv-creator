<?php

namespace App\Controller;

use App\Entity\Experience;
use App\Form\ExperienceType;
use App\Repository\ExperienceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/experiences", name="admin_experiences_")
 */
class ExperienceController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET", "POST"})
     */
    public function index(ExperienceRepository $expRepo, Request $request)
    {
        $experiences = $expRepo->findAll();

        $experience = new Experience();

        $form = $this->createForm(ExperienceType::class, $experience);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($experience);
            $em->flush();

            $this->addFlash('success', 'Experience ajoutée');

            return $this->redirectToRoute('admin_experiences_list');
        }

        return $this->render('admin/experience/index.html.twig', [
            'experiences' => $experiences,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET", "POST"}, requirements={"id"="\d+|new"})
     */
    public function show($id, Experience $experience = null, Request $request)
    {
        if(is_null($experience)) $experience = new Experience();

        $form = $this->createForm(ExperienceType::class, $experience);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($experience);
            $em->flush();

            $this->addFlash('success', 'Experience mis à jour');

            return $this->redirectToRoute('admin_home');
        }

        return $this->render('admin/experience/show.html.twig', [
            'experience' => $experience,
            'form_experience' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET", "POST"}, requirements={"id"="\d+"})
     */
    public function delete(Experience $experience)
    {
        if(!$experience) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($experience);
        $em->flush();

        $this->addFlash('success', 'Experience supprimée');

        return $this->redirectToRoute('admin_experiences_home');
    }
}
