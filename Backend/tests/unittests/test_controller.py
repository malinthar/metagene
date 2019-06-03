import os
import tempfile
import pytest
import controller

@pytest.fixture
def client():
    controller.app.config['TESTING'] = True
    client = controller.app.test_client()
    yield client
def test_httpmeta(client):
    details={} 
    rv = client.post('/users/meta',data=details)
    assert rv!=None   

