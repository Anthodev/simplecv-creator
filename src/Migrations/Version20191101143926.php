<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191101143926 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TABLE language (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL, level INTEGER NOT NULL, description VARCHAR(64) NOT NULL)');
        $this->addSql('CREATE TABLE soft (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL)');
        $this->addSql('CREATE TABLE interest (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(128) NOT NULL, icon VARCHAR(16) NOT NULL, list_order INTEGER DEFAULT NULL)');
        $this->addSql('CREATE TABLE training (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(128) NOT NULL, location VARCHAR(128) NOT NULL, description CLOB NOT NULL, date_start DATE NOT NULL, date_end DATE DEFAULT NULL, company VARCHAR(128) NOT NULL, company_link VARCHAR(255) DEFAULT NULL, list_order INTEGER DEFAULT NULL)');
        $this->addSql('CREATE TABLE skill (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL, level INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL, link VARCHAR(512) DEFAULT NULL, icon VARCHAR(16) NOT NULL, contact_order INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE experience (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(128) NOT NULL, location VARCHAR(128) NOT NULL, description CLOB NOT NULL, date_start DATE NOT NULL, date_end DATE DEFAULT NULL, company VARCHAR(64) DEFAULT NULL, company_link VARCHAR(255) DEFAULT NULL, list_order INTEGER DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE portfolio (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(128) NOT NULL, image VARCHAR(255) DEFAULT NULL, description VARCHAR(1024) DEFAULT NULL, type VARCHAR(8) NOT NULL, list_order INTEGER DEFAULT NULL, caption VARCHAR(255) DEFAULT NULL)');
        $this->addSql('CREATE TABLE aptitude (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP TABLE language');
        $this->addSql('DROP TABLE soft');
        $this->addSql('DROP TABLE interest');
        $this->addSql('DROP TABLE training');
        $this->addSql('DROP TABLE skill');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE experience');
        $this->addSql('DROP TABLE portfolio');
        $this->addSql('DROP TABLE aptitude');
    }
}
