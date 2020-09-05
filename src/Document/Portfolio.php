<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Portfolio
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @var mixed
     */
    protected $id;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $image;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $description;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $type;

    /**
     * @MongoDB\Field(type="int")
     * @var mixed
     */
    protected $list_order;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $caption;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $createdAt;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $updatedAt;

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
     * Get the value of image
     *
     * @return  mixed
     */ 
    public function getImage(): ?string
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     * @param  mixed  $image
     *
     * @return  self
     */ 
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get the value of description
     *
     * @return  mixed
     */ 
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @param  mixed  $description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of type
     *
     * @return  mixed
     */ 
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @param  mixed  $type
     *
     * @return  self
     */ 
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get the value of list_order
     *
     * @return  mixed
     */ 
    public function getList_order(): ?int
    {
        return $this->list_order;
    }

    /**
     * Set the value of list_order
     *
     * @param  mixed  $list_order
     *
     * @return  self
     */ 
    public function setList_order($list_order)
    {
        $this->list_order = $list_order;

        return $this;
    }

    /**
     * Get the value of caption
     *
     * @return  mixed
     */ 
    public function getCaption(): ?string
    {
        return $this->caption;
    }

    /**
     * Set the value of caption
     *
     * @param  mixed  $caption
     *
     * @return  self
     */ 
    public function setCaption($caption)
    {
        $this->caption = $caption;

        return $this;
    }

    /**
     * Get the value of createdAt
     *
     * @return  mixed
     */ 
    public function getCreatedAt(): ?\DateTimeInterface
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
    public function getUpdatedAt(): ?\DateTimeInterface
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
}
