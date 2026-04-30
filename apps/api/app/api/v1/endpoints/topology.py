from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_topology():
    return {'status': 'ok', 'obs_component': 'topology'}
