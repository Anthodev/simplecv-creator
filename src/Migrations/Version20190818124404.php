<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190818124404 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('ALTER TABLE experience ADD COLUMN company VARCHAR(64) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__experience AS SELECT id, title, location, description, date_start, date_end, company_link FROM experience');
        $this->addSql('DROP TABLE experience');
        $this->addSql('CREATE TABLE experience (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(128) NOT NULL, location VARCHAR(128) NOT NULL, description CLOB NOT NULL, date_start DATE NOT NULL, date_end DATE DEFAULT NULL, company_link VARCHAR(255) DEFAULT NULL)');
        $this->addSql('INSERT INTO experience (id, title, location, description, date_start, date_end, company_link) SELECT id, title, location, description, date_start, date_end, company_link FROM __temp__experience');
        $this->addSql('DROP TABLE __temp__experience');
    }
}
