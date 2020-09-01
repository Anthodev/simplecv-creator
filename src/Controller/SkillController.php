<?php

namespace App\Controller;

use App\Document\Skill;
use App\Form\SkillType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/skills", name="admin_skills_")
 */
class SkillController extends AbstractController
{
    private $skillRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->skillRepo = $dm->getRepository(Skill::class);
    }
    /**
     * @Route("/", name="list")
     */
    public function index(Request $request)
    {
        $skills = $skillRepo->findAll();

        $skill = new Skill();

        $form = $this->createForm(SkillType::class, $skill);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($skill);
            $this->dm->flush();

            $this->addFlash('success', 'Skill ajoutée');

            return $this->redirectToRoute('admin_skills_list');
        }

        return $this->render('admin/skill/index.html.twig', [
            'skills' => $skills,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function show(Skill $skill, Request $request)
    {
        if(!$skill) throw $this->createNotFoundException('Expérience introuvable');

        $form = $this->createForm(SkillType::class, $skill);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($skill);
            $this->dm->flush();

            $this->addFlash('success', 'Skill mis à jour');

            return $this->redirectToRoute('admin_skills_home');
        }

        return $this->render('admin/skill/show.html.twig', [
            'form_skill' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Skill $skill)
    {
        if(!$skill) throw $this->createNotFoundException('Expérience introuvable');

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($skill);
        $this->dm->flush();

        $this->addFlash('success', 'Skill supprimée');

        return $this->redirectToRoute('admin_skills_home');
    }
}
