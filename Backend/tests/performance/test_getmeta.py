import pytest
import visualizer
@pytest.fixture
def client():
    client = visualizer
    yield client

def test_getMeta(client,benchmark):
    @benchmark
    def result():
     details={'acnum':'GSE6207'}
     rv=client.getMeta(details)