<?php

namespace App\Controller;

use Exception;
use App\Document\Role;
use App\Document\User;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/user")
 * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
 * @package App\Controller
 */
class UserController extends AbstractController
{

    private $userRepository;
    private $roleRepository;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm, SerializerInterface $serializer)
    {
        $this->dm = $dm;
        $this->userRepository = $dm->getRepository(User::class);
        $this->roleRepository = $dm->getRepository(Role::class);
        $this->serializer = $serializer;
    }

    /**
     * @Route("/new", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
     * @param Request $request 
     * @return JsonResponse|void 
     */
    public function new(Request $request)
    {
        $username = '';
        $password = '';
        $roleUser = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $username = $decodedData['username'];
            $password = $decodedData['password'];
            $roleUser = $decodedData['roleUser'];
        }

        $role = $this->getUserRole($roleUser);

        $user = new User();
        $user->setUsername($username);
        $user->setPlainPassword($password);

        $user->setRole($role);
        $role->addUser($user);

        try {
            $this->dm->persist($user);
            $this->dm->flush();

            return new JsonResponse($user, 200);
        } catch (Exception $e) {
            return new JsonResponse(\json_encode($e), 403);
        }
    }

    /**
     * @Route("/set", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function set(Request $request)
    {
        $user = $this->getUser();

        $name = '';
        $title = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $name = $decodedData['name'];
            $title = $decodedData['title'];
        }

        $user->setName($name);
        $user->setTitle($title);

        try {
            $this->dm->flush();

            $serializedUser = $this->serializer->serialize($user, 'json');

            $response = new Response($serializedUser);
            $response->setStatusCode(Response::HTTP_OK);
            $response->headers->set('Content-Type', 'application/json');

            return $response;
        } catch (Exception $e) {
            return new JsonResponse(\json_encode($e), 403);
        }
    }

    /**
     * @Route("/count", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
     */
    public function getUsersCount()
    {
        $usercount = 0;

        $usercount = count($this->userRepository->findAll());
        // dd($this->roleRepository);
        // dump($usercount);

        $serializedResponse = $this->serializer->serialize($usercount, 'json');

        $response = new Response($serializedResponse);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
        // return new JsonResponse($usercount, 200);
    }

    /**
     * 
     * @param mixed $roleCode 
     * @return mixed|Role 
     */
    public function getUserRole($roleCode)
    {
        $role = $this->roleRepository->findOneBy(['name' => $roleCode]);

        if (is_null($role)) {
            $role = new Role();

            if ($roleCode === 'User') {
                $role->setName('User');
                $role->setCode('ROLE_USER');
            } else {
                $role->setName('Admin');
                $role->setCode('ROLE_ADMIN');
            }

            $this->dm->persist($role);
            $this->dm->flush();
        }

        return $role;
    }

    /**
     * User login route
     * 
     * @Route("/login", name="login", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function login()
    {
        $user = $this->getUser();

        return new JsonResponse([
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'role' => $user->getRole()->getName()
        ], 200);
    }

    /**
     * Return user info
     * 
     * @Route("/profile", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function getUserInfo()
    {
        $user = $this->getUser();

        // $response = new Response();

        // $serializedUser = $this->serializer->serialize($user, 'json');
        $serializedUser = $this->serializer->serialize($user, 'json');

        $response = new Response($serializedUser);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
