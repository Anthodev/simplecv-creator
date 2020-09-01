<?php

namespace App\Controller;

use App\Document\Experience;
use App\Form\ExperienceType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/experiences", name="admin_experiences_")
 */
class ExperienceController extends AbstractController
{
    private $expRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->expRepo = $dm->getRepository(Experience::class);
    }
    /**
     * @Route("/", name="list", methods={"GET", "POST"})
     */
    public function index(Request $request)
    {
        $experiences = $expRepo->findAll();

        $experience = new Experience();

        $form = $this->createForm(ExperienceType::class, $experience);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($experience);
            $this->dm->flush();

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
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($experience);
            $this->dm->flush();

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

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($experience);
        $this->dm->flush();

        $this->addFlash('success', 'Experience supprimée');

        return $this->redirectToRoute('admin_experiences_home');
    }
}
