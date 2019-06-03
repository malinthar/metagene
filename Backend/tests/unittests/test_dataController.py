import os
import tempfile
import pandas as pd
import pytest
import dataController

@pytest.fixture
def client():
    client = dataController
    yield client

def test_DataObjectClass(client):
    rv = client.getDataset('GSE607')
    assert rv!=None

    