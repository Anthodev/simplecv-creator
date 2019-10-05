<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191002133056 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('ALTER TABLE portfolio ADD COLUMN caption VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__portfolio AS SELECT id, name, image, description, type, list_order FROM portfolio');
        $this->addSql('DROP TABLE portfolio');
        $this->addSql('CREATE TABLE portfolio (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(128) NOT NULL, image VARCHAR(255) DEFAULT NULL, description VARCHAR(1024) DEFAULT NULL, type VARCHAR(8) NOT NULL, list_order INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO portfolio (id, name, image, description, type, list_order) SELECT id, name, image, description, type, list_order FROM __temp__portfolio');
        $this->addSql('DROP TABLE __temp__portfolio');
    }
}
