<?php

namespace App\Form;

use App\Entity\Portfolio;
use Symfony\Component\Form\AbstractType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class PortfolioType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('image', FileType::class,[
                'label' => 'Image (jpg,png,gif)',
                'empty_data' => '', 
            ])
            ->add('caption', TextType::class)
            ->add('description', CKEditorType::class, [
                'required' => true,
                'attr' => [
                    'rows' => 4,
                ],
                'config' => [
                    'toolbar' => 'my_toolbar'
                ],
            ])
            ->add('type', ChoiceType::class, [
                'choices' => ['Professional' => 'pro', 'Personal' => 'perso'],
            ])
            ->add('list_order', IntegerType::class, [])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Portfolio::class,
        ]);
    }
}
