.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: wiremock
wiremock: ## (devcontainer) Refresh wiremock mappings
	curl -X POST http://wiremock:8080/__admin/mappings/reset

.PHONY: pcr
pcr: ## Run pre-commit
	pre-commit run --all-files

.PHONY: run
run: ## Run docker compose service
	docker compose -f .devcontainer/docker-compose.yml run --rm --service-ports $(SERVICE) $(COMMAND)
