from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_metrics():
    return {'status': 'ok', 'obs_component': 'metrics'}
