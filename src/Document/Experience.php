<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Experience
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
    protected $title;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $location;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $description;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $date_start;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $date_end;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $company;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $companyLink;

    /**
     * @MongoDB\Field(type="int")
     * @var mixed
     */
    protected $list_order;

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
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of location
     *
     * @return  mixed
     */ 
    public function getLocation(): ?string
    {
        return $this->location;
    }

    /**
     * Set the value of location
     *
     * @param  mixed  $location
     *
     * @return  self
     */ 
    public function setLocation($location)
    {
        $this->location = $location;

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
     * Get the value of date_start
     *
     * @return  mixed
     */ 
    public function getDate_start(): ?\DateTimeInterface
    {
        return $this->date_start;
    }

    /**
     * Set the value of date_start
     *
     * @param  mixed  $date_start
     *
     * @return  self
     */ 
    public function setDate_start($date_start)
    {
        $this->date_start = $date_start;

        return $this;
    }

    /**
     * Get the value of date_end
     *
     * @return  mixed
     */ 
    public function getDate_end(): ?\DateTimeInterface
    {
        return $this->date_end;
    }

    /**
     * Set the value of date_end
     *
     * @param  mixed  $date_end
     *
     * @return  self
     */ 
    public function setDate_end($date_end)
    {
        $this->date_end = $date_end;

        return $this;
    }

    /**
     * Get the value of company
     *
     * @return  mixed
     */ 
    public function getCompany(): ?string
    {
        return $this->company;
    }

    /**
     * Set the value of company
     *
     * @param  mixed  $company
     *
     * @return  self
     */ 
    public function setCompany($company)
    {
        $this->company = $company;

        return $this;
    }

    /**
     * Get the value of companyLink
     *
     * @return  mixed
     */ 
    public function getCompanyLink(): ?string
    {
        return $this->companyLink;
    }

    /**
     * Set the value of companyLink
     *
     * @param  mixed  $companyLink
     *
     * @return  self
     */ 
    public function setCompanyLink($companyLink)
    {
        $this->companyLink = $companyLink;

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
