import os
import tempfile
import pandas as pd
import pytest
import dataProcessor

@pytest.fixture
def client():
    client = dataProcessor
    yield client

def test_DataObjectClass(client):
    rv = client.Data('GSE627')
    assert rv.gse!=None and rv.getSamples('GSM143385')!=None and rv.getPlatforms()!=None and list(rv.getDataTable().columns)!=None

    