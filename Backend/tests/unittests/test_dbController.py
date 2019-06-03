import os
import pytest
import visualizer
from controller import dbController
from controller import app
from datetime import datetime
@pytest.fixture
def client():
    client = dbController
    yield client
def test_DBCtrl(client):
    #initialize
    rv=client.DBCtrl(app) 
    assert type(rv).__class__.__name__==type(client.DBCtrl).__class__.__name__
def test_Pool(client):
    rv=client.Pool.get_pool_instance()
    assert type(rv).__class__.__name__==type(client.Pool).__class__.__name__
def test_DbObj(client):
    rv=client.DBObj(app)
    assert type(rv).__class__.__name__==type(client.DBObj).__class__.__name__
def test_insertread(client):
    rv=client.Pool.get_pool_instance() 
    assert type(rv).__class__.__name__==type(client.Pool).__class__.__name__
    rv=rv.get_unused(app)
    assert type(rv).__class__.__name__==type(client.DBObj).__class__.__name__
    created=datetime.utcnow()
    user={
            'name':'testdb',
            'email':'testdb@gmail.com',
            'password':'testdb123',
            'created':created
    } 
    
    rv1=rv.insert(user)
    assert type(rv1)!=None
    params={'_id':rv1}
    rv2=rv.read(params)
    assert type(rv2)!=None
    