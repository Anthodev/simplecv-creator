<?php

namespace App\Form;

use App\Entity\Training;
use Symfony\Component\Form\AbstractType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class TrainingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('company', TextType::class, [
                'required' => true,
                'label' => 'School',
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('companyLink', TextType::class, [
                'required' => false,
                'label' => 'School link',
            ])
            ->add('location', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('description', CKEditorType::class, [
                'required' => true,
                'attr' => [
                    'rows' => 8,
                ],
                'config' => [
                    'toolbar' => 'my_toolbar'
                ],
            ])
            ->add('date_start', DateType::class, [
                'widget' => 'single_text',
                'attr' => ['class' => 'js-datepicker'],
                'required' => true,
                'constraints' => [
                    new NotBlank()
                ]
            ])
            ->add('date_end', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
                'attr' => ['class' => 'js-datepicker'],
            ])
            ->add('list_order', IntegerType::class, [])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Training::class,
        ]);
    }
}
