<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190827160717 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('ALTER TABLE experience ADD COLUMN photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE portfolio ADD COLUMN list_order INTEGER DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__experience AS SELECT id, title, location, description, date_start, date_end, company, company_link, list_order FROM experience');
        $this->addSql('DROP TABLE experience');
        $this->addSql('CREATE TABLE experience (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(128) NOT NULL, location VARCHAR(128) NOT NULL, description CLOB NOT NULL, date_start DATE NOT NULL, date_end DATE DEFAULT NULL, company VARCHAR(64) DEFAULT NULL, company_link VARCHAR(255) DEFAULT NULL, list_order INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO experience (id, title, location, description, date_start, date_end, company, company_link, list_order) SELECT id, title, location, description, date_start, date_end, company, company_link, list_order FROM __temp__experience');
        $this->addSql('DROP TABLE __temp__experience');
        $this->addSql('CREATE TEMPORARY TABLE __temp__portfolio AS SELECT id, name, image, description, type FROM portfolio');
        $this->addSql('DROP TABLE portfolio');
        $this->addSql('CREATE TABLE portfolio (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(128) NOT NULL, image VARCHAR(255) DEFAULT NULL, description VARCHAR(1024) DEFAULT NULL, type VARCHAR(8) NOT NULL)');
        $this->addSql('INSERT INTO portfolio (id, name, image, description, type) SELECT id, name, image, description, type FROM __temp__portfolio');
        $this->addSql('DROP TABLE __temp__portfolio');
    }
}
