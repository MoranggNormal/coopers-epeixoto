CONTAINER_NAME ?=

dev:
	docker-compose up -d --build database server client-dev nginx

prod:
	DOCKERFILE=Dockerfile.prod docker-compose up -d --build database server client-prod nginx

shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

stop:
	docker stop $(CONTAINER_NAME)

rm:
	docker rm $(CONTAINER_NAME)

down:
	docker-compose down

restart: stop run

clean:
	docker system prune -f

purge:
	docker rm -f $(shell docker ps -a -q)
	docker rmi -f $(shell docker images -q)
