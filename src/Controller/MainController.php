<?php

namespace App\Controller;

use Exception;
use App\Document\Soft;
use App\Document\User;
use App\Document\Skill;
use App\Document\Contact;
use App\Document\Aptitude;
use App\Document\Interest;
use App\Document\Language;
use App\Document\Training;
use App\Document\Portfolio;
use App\Document\Experience;
use App\Document\Extra;
use Doctrine\ODM\MongoDB\DocumentManager;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    private $userRepo;
    private $expRepo;
    private $contactRepo;
    private $trainingRepo;
    private $portfolioRepo;
    private $aptRepo;
    private $skillRepo;
    private $softRepo;
    private $interestRepo;
    private $extraRepo;
    private $languageRepo;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->userRepo = $dm->getRepository(User::class);
        $this->expRepo = $dm->getRepository(Experience::class);
        $this->contactRepo = $dm->getRepository(Contact::class);
        $this->trainingRepo = $dm->getRepository(Training::class);
        $this->portfolioRepo = $dm->getRepository(Portfolio::class);
        $this->aptRepo = $dm->getRepository(Aptitude::class);
        $this->skillRepo = $dm->getRepository(Skill::class);
        $this->softRepo = $dm->getRepository(Soft::class);
        $this->interestRepo = $dm->getRepository(Interest::class);
        $this->extraRepo = $dm->getRepository(Extra::class);
        $this->languageRepo = $dm->getRepository(Language::class);
        $this->serializer = $serializer;
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
     * @Route("/api/data/get", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
     */
    public function getData()
    {
        $cvData = [];
        $cvData['info'] = $this->userRepo->findOneBy([], ['id' => 'DESC'], 1, 0);
        $cvData['experiences'] = $this->expRepo->findBy([], ['list_order' => 'ASC']);
        $cvData['trainings'] = $this->trainingRepo->findBy([], ['list_order' => 'ASC']);
        $cvData['skills'] = $this->skillRepo->findBy([], ['level' => 'DESC']);
        $cvData['aptitudes'] = $this->aptRepo->findAll();
        $cvData['interests'] = $this->interestRepo->findBy([], ['list_order' => 'ASC']);
        $cvData['contacts'] = $this->contactRepo->findAll();
        $cvData['portfolios'] = $this->portfolioRepo->findBy([], ['list_order' => 'ASC']);
        $cvData['portfolios_pro'] = $this->portfolioRepo->findBy(['type' => 'pro'], ['list_order' => 'ASC']);
        $cvData['portfolios_perso'] = $this->portfolioRepo->findBy(['type' => 'perso'], ['list_order' => 'ASC']);
        $cvData['softs'] = $this->softRepo->findAll();
        $cvData['extras'] = $this->extraRepo->findAll();
        $cvData['languages'] = $this->languageRepo->findAll();

        try {
            $serializedResponse = $this->serializer->serialize($cvData, 'json');

            $response = new Response($serializedResponse);
            $response->setStatusCode(Response::HTTP_OK);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        } catch (Exception $e) {
            return new JsonResponse($e, 403);
        }
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
