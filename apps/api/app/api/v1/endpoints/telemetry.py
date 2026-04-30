from fastapi import APIRouter
router = APIRouter()
@router.get('/metrics')
def get_metrics():
    return {'avg_latency': 45.2, 'packet_loss': 0.001}
@router.get('/logs')
def get_logs():
    return {'logs': []}
@router.get('/traces')
def get_traces():
    return {'traces': []}
