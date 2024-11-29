
init: down \
 	development-build \
	development-up \
	npm-install \

up: development-up \
	npm-install

down:
	docker-compose down

development-build:
	docker-compose build

development-up:
	docker-compose up

npm-install:
	docker-compose exec web_local npm install && docker-compose exec server_local npm install 
