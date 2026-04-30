from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, telemetry, flows, topology, alerts, dashboard, metrics
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(telemetry.router, prefix="/telemetry", tags=["telemetry"])
api_router.include_router(flows.router, prefix="/flows", tags=["flows"])
api_router.include_router(topology.router, prefix="/topology", tags=["topology"])
api_router.include_router(alerts.router, prefix="/alerts", tags=["alerts"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
