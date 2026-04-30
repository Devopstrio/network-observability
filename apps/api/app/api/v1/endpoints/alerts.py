from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_alerts():
    return {'status': 'ok', 'obs_component': 'alerts'}
