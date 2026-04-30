.PHONY: help build up down test lint migrate simulate-traffic analyze-latency

help:
	@echo "Network Observability Platform - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + E2E Observability)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "simulate-traffic   : Generate synthetic network traffic flows"
	@echo "analyze-latency    : Run latency distribution analytics"
	@echo "detect-anomalies   : Trigger anomaly detection engine"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/telemetry
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

simulate-traffic:
	docker-compose exec api python scripts/simulate/traffic_gen.py

analyze-latency:
	docker-compose exec api python scripts/analyze/latency_dist.py

detect-anomalies:
	docker-compose exec api python scripts/analyze/anomaly_detector.py
