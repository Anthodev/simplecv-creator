<?php

namespace App\Controller;

use App\Repository\SoftRepository;
use App\Repository\SkillRepository;
use App\Repository\ContactRepository;
use App\Repository\AptitudeRepository;
use App\Repository\InterestRepository;
use App\Repository\LanguageRepository;
use App\Repository\TrainingRepository;
use App\Repository\PortfolioRepository;
use App\Repository\ExperienceRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(
        ExperienceRepository $expRepo,
        TrainingRepository $trainingRepo,
        SkillRepository $skillRepo,
        AptitudeRepository $aptRepo,
        InterestRepository $interestRepo,
        ContactRepository $contactRepo,
        PortfolioRepository $portfolioRepo,
        SoftRepository $softRepo,
        LanguageRepository $langRepo
    )
    {
        $info = file_get_contents($this->getParameter('data_directory') . '/data.json');
        $info = \json_decode($info);
        
        $experiences = $expRepo->findBy([], ['list_order' => 'ASC']);
        $trainings = $trainingRepo->findBy([], ['list_order' => 'ASC']);
        $skills = $skillRepo->findBy([], ['level' => 'DESC']);
        $aptitudes = $aptRepo->findAll();
        $interests = $interestRepo->findBy([], ['list_order' => 'ASC']);
        $contacts = $contactRepo->findAll();
        $portfolios = $portfolioRepo->findAll();
        $softs = $softRepo->findAll();
        $languages = $langRepo->findAll();
        
        return $this->render('main/index.html.twig', [
            'info' => $info,
            'experiences' => $experiences,
            'trainings' => $trainings,
            'skills' => $skills,
            'aptitudes' => $aptitudes,
            'interests' => $interests,
            'contacts' => $contacts,
            'portfolios' => $portfolios,
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
