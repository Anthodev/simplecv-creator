<?php

namespace App\Document;

use JMS\Serializer\Annotation as Serializer;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @MongoDB\Document
 * @UniqueEntity("username")
 * @MongoDB\HasLifecycleCallbacks()
 * @Serializer\ExclusionPolicy("all")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Serializer\Expose
     * @var mixed
     */
    protected $id;

    /**
     * @MongoDB\Field(type="string")
     * @Serializer\Expose
     * @var mixed
     */
    protected $name;

    /**
     * @MongoDB\Field(type="string")
     * @Serializer\Expose
     * @var mixed
     */
    protected $username;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $plainPassword;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $password;

    /**
     * @MongoDB\Field(type="string")
     * @Serializer\Expose
     * @var mixed
     */
    protected $title;

    /**
     * @MongoDB\Field(type="string")
     * @Serializer\Expose
     * @var mixed
     */
    protected $presentation;

    /**
     * @MongoDB\Field(type="string")
     * @Serializer\Expose
     * @var mixed
     */
    protected $photo;

    /**
     * @MongoDB\ReferenceOne(targetDocument=App\Document\Role::class)
     * @Serializer\Expose
     * @var mixed
     */
    protected $role;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    private $createdAt;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    private $updatedAt;

    /**
     * Get the value of id
     *
     * @return  mixed
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Get the value of name
     *
     * @return  mixed
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param  mixed  $name
     *
     * @return  self
     */
    public function setName($name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of title
     *
     * @return  mixed
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @param  mixed  $title
     *
     * @return  self
     */
    public function setTitle($title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of presentation
     *
     * @return  mixed
     */
    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    /**
     * Set the value of presentation
     *
     * @param  mixed  $presentation
     *
     * @return  self
     */
    public function setPresentation($presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }

    /**
     * Get the value of photo
     *
     * @return  mixed
     */
    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    /**
     * Set the value of photo
     *
     * @param  mixed  $photo
     *
     * @return  self
     */
    public function setPhoto($photo)
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Get the value of role
     *
     * @return  mixed
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set the value of role
     *
     * @param  mixed  $role
     *
     * @return  self
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    public function getRoles()
    {
        return [$this->getRole()->getCode()];
    }

    /**
     * Get the value of createdAt
     *
     * @return  mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set the value of createdAt
     *
     * @param  mixed  $createdAt
     *
     * @return  self
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get the value of updatedAt
     *
     * @return  mixed
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set the value of updatedAt
     *
     * @param  mixed  $updatedAt
     *
     * @return  self
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }
    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }
    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize([
            $this->id,
            $this->username,
            $this->password,
            // see section on salt below
            // $this->salt,
        ]);
    }
    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list(
            $this->id,
            $this->username,
            $this->password,
            // see section on salt below
            // $this->salt
        ) = unserialize($serialized, ['allowed_classes' => false]);
    }

    /**
     * Get the value of plainPassword
     *
     * @return  mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * Set the value of plainPassword
     *
     * @param  mixed  $plainPassword
     *
     * @return  self
     */
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;

        $this->password = null;

        return $this;
    }

    /**
     * Get the value of password
     *
     * @return  mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @param  mixed  $password
     *
     * @return  self
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get the value of username
     *
     * @return  mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set the value of username
     *
     * @param  mixed  $username
     *
     * @return  self
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }
}
