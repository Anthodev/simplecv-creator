<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190930152815 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__contact AS SELECT id, name, link, icon, contact_order FROM contact');
        $this->addSql('DROP TABLE contact');
        $this->addSql('CREATE TABLE contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL COLLATE BINARY, icon VARCHAR(16) NOT NULL COLLATE BINARY, contact_order INTEGER NOT NULL, link VARCHAR(512) DEFAULT NULL)');
        $this->addSql('INSERT INTO contact (id, name, link, icon, contact_order) SELECT id, name, link, icon, contact_order FROM __temp__contact');
        $this->addSql('DROP TABLE __temp__contact');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__contact AS SELECT id, name, link, icon, contact_order FROM contact');
        $this->addSql('DROP TABLE contact');
        $this->addSql('CREATE TABLE contact (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(64) NOT NULL, icon VARCHAR(16) NOT NULL, contact_order INTEGER NOT NULL, link VARCHAR(512) NOT NULL COLLATE BINARY)');
        $this->addSql('INSERT INTO contact (id, name, link, icon, contact_order) SELECT id, name, link, icon, contact_order FROM __temp__contact');
        $this->addSql('DROP TABLE __temp__contact');
    }
}
