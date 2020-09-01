<?php

namespace App\Repository;

use App\Entity\Aptitude;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Aptitude|null find($id, $lockMode = null, $lockVersion = null)
 * @method Aptitude|null findOneBy(array $criteria, array $orderBy = null)
 * @method Aptitude[]    findAll()
 * @method Aptitude[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AptitudeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Aptitude::class);
    }

    // /**
    //  * @return Aptitude[] Returns an array of Aptitude objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Aptitude
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
