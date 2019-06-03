
import pytest
import visualizer

@pytest.fixture
def client():
    client = visualizer
    yield client
def test_visualize(client,benchmark):
    @benchmark
    def result():
     details={'acnum':'GSE6207','gtype':'heatmap'}
     rv=client.visualize(details)
    
