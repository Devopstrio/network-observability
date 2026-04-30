from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_flows():
    return {'status': 'ok', 'obs_component': 'flows'}
