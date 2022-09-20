containerName = "simplecv-creator-laravel.test-1"
isContainerRunning := $(shell docker info > /dev/null 2>&1 && docker ps | grep $(containerName) > /dev/null 2>&1 && echo 1)
user := $(shell id -u)
group := $(shell id -g)

DOCKER := sail
DOCKER_COMPOSE := USER_ID=$(user) GROUP_ID=$(group) docker-compose
DOCKER_TEST := APP_ENV=testing
ifeq ($(isContainerRunning), 1)
	DOCKER := @docker exec -t -u $(user):$(group) $(containerName) php
	DOCKER_COMPOSE := USER_ID=$(user) GROUP_ID=$(group) docker-compose
	DOCKER_TEST := @docker exec -t -u $(user):$(group) $(containerName) APP_ENV=testing php
endif

CONSOLE := $(DOCKER)
CONSOLE_MEMORY := $(DOCKER) php -d memory_limit=256M
CONSOLE_TEST := $(DOCKER_TEST)
COMPOSER = $(DOCKER) composer
SAIL = vendor/bin/sail

## —— App ————————————————————————————————————————————————————————————————

build-docker:
	$(DOCKER_COMPOSE) pull --ignore-pull-failures
	$(DOCKER_COMPOSE) build --no-cache

up:
	sh vendor/bin/sail up -d

stop:
	sh vendor/bin/sail stop

prune:
	@docker-compose down --remove-orphans
	@docker-compose down --volumes
	@docker-compose rm -f

serve:
	$(CONSOLE) serve

install-project: install reset-database generate-jwt ## First installation for setup the project

update-project: install  reset-database ## update the project after a checkout on another branch or to reset the state of the project

sync: update-project test-all ## Synchronize the project with the current branch, install composer dependencies, drop DB and run all migrations, fixtures and all test

## —— 🐝 The Symfony Makefile 🐝 ———————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?## .*$$)|(^## )' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Composer 🧙‍♂️ ————————————————————————————————————————————————————————————
install: composer.lock ## Install vendors according to the current composer.lock file
	$(COMPOSER) install -n

update: composer.json ## Update vendors according to the composer.json file
	$(COMPOSER) update -w

## —— Symfony ————————————————————————————————————————————————————————————————
cc: ## Apply cache clear
	$(DOCKER) sh -c "rm -rf var/cache"
	$(CONSOLE) cache:clear
	$(DOCKER) sh -c "chmod -R 777 var/cache"

cc-test: ## Apply cache clear
	$(DOCKER) sh -c "rm -rf var/cache"
	$(CONSOLE_TEST) cache:clear
	$(DOCKER) sh -c "chmod -R 777 var/cache"

doctrine-validate:
	$(CONSOLE) doctrine:schema:validate --skip-sync $c

reset-database: drop-database database migrate load-fixtures ## Reset database with migration

database: ## Create database if no exists
	$(CONSOLE) migrate:status

drop-database: ## Drop the database
	$(CONSOLE) doctrine:database:drop --force --if-exists

migration: ## Apply doctrine migration
	$(CONSOLE) make:migration

migrate: ## Apply doctrine migrate
	$(CONSOLE) doctrine:migration:migrate -n --all-or-nothing

generate-jwt: ## Generate private and public keys
	$(CONSOLE) lexik:jwt:generate-keypair --overwrite -q $c

## —— Integration ✅ ——————————————————————————————————————————————————————
load-fixtures: drop-database database migrate ## Load fixtures
	$(CONSOLE) app:load-fixtures

## —— Tests ✅ ————————————————————————————————————————————————————————————
test-database: ### load database schema
	$(CONSOLE_TEST) artisan migrate
	$(CONSOLE_TEST) artisan db:seed --class=ExperienceTypeSeeder
	$(CONSOLE_TEST) artisan db:seed --class=SkillTypeSeeder

test-load-fixtures: test-database ## load database schema & fixtures
	$(CONSOLE_TEST) app:load-test-fixtures

pest:
	$(SAIL) bin pest

test: phpunit.xml* ## Launch main functional and unit tests, stopped on failure
	$(SAIL) ./vendor/bin/pest --stop-on-failure $c

test-all: phpunit.xml* test-load-fixtures ## Launch main functional and unit tests
	$(DOCKER_TEST) ./vendor/bin/pest

test-report: phpunit.xml* test-load-fixtures ## Launch main functional and unit tests with report
	$(DOCKER_TEST) ./vendor/bin/pest --coverage-text --colors=never --log-junit report.xml $c

## —— Coding standards ✨ ——————————————————————————————————————————————————————
pint: ## Run ECS only
	$(SAIL) bin pint
