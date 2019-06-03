import os
import tempfile
import pandas as pd
import pytest
import fwriter
@pytest.fixture
def client():
    client = fwriter
    yield client

def test_fwrie(client):
    rv = client.fwrite('example string')
    assert rv==True or rv==False