<?php

namespace App\Controller;

use App\Document\Soft;
use App\Document\Skill;
use App\Document\Contact;
use App\Document\Aptitude;
use App\Document\Interest;
use App\Document\Language;
use App\Document\Training;
use App\Document\Portfolio;
use App\Document\Experience;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{
    private $expRepo;
    private $contactRepo;
    private $trainingRepo;
    private $portfolioRepo;
    private $aptRepo;
    private $skillRepo;
    private $softRepo;
    private $interestRepo;
    private $languageRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->expRepo = $dm->getRepository(Experience::class);
        $this->contactRepo = $dm->getRepository(Contact::class);
        $this->trainingRepo = $dm->getRepository(Training::class);
        $this->portfolioRepo = $dm->getRepository(Portfolio::class);
        $this->aptRepo = $dm->getRepository(Aptitude::class);
        $this->skillRepo = $dm->getRepository(Skill::class);
        $this->softRepo = $dm->getRepository(Soft::class);
        $this->interestRepo = $dm->getRepository(Interest::class);
        $this->languageRepo = $dm->getRepository(Language::class);
    }
    
    /**
     * @Route("/", name="index")
     * @Route("/{vueRouting}", requirements={"vueRouting"="^(?!.*api|_wdt|_profiler).+"}, name="vue_pages")
     */
    public function index(Request $request)
    {
        return $this->render('main/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/pdf", name="home_pdf")
     */
    public function pdf()
    {
        $info = file_get_contents($this->getParameter('data_directory') . '/data.json');
        $info = \json_decode($info);
        
        $experiences = $this->expRepo->findBy([], ['list_order' => 'ASC']);
        $trainings = $this->trainingRepo->findBy([], ['list_order' => 'ASC']);
        $skills = $this->skillRepo->findBy([], ['level' => 'DESC']);
        $aptitudes = $this->aptRepo->findAll();
        $interests = $this->interestRepo->findBy([], ['list_order' => 'ASC']);
        $contacts = $this->contactRepo->findAll();
        $portfolios_pro = $this->portfolioRepo->findBy(['type' => 'pro'], ['list_order' => 'ASC']);
        $portfolios_perso = $this->portfolioRepo->findBy(['type' => 'perso'], ['list_order' => 'ASC']);
        $softs = $this->softRepo->findAll();
        $languages = $this->langRepo->findAll();
        
        return $this->render('main/pdf.html.twig', [
            'info' => $info,
            'experiences' => $experiences,
            'trainings' => $trainings,
            'skills' => $skills,
            'aptitudes' => $aptitudes,
            'interests' => $interests,
            'contacts' => $contacts,
            'portfolios_pro' => $portfolios_pro,
            'portfolios_perso' => $portfolios_perso,
            'softs' => $softs,
            'languages' => $languages,
        ]);
    }

        /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
