import os
import tempfile
import pandas as pd
import pytest
import visualizer
from dataProcessor import Data
@pytest.fixture
def client():
    client = visualizer
    yield client
def test_plotScatter(client):
    dataset=Data('GSE6207').getDataTable()
    genes=['GSM143386','GSM143385']
    rv = client.scatterplot.plotScatter(dataset,genes)
    assert rv!=None
def test_plotHeat(client):
    dataset=Data('GSE6207').getDataTable()
    rv = client.heatmap.plotHeat(dataset)
    assert rv!=None

def test_BarPlot(client):
    dataset=Data('GSE6207').getDataTable()
    sample='GSM143388'
    number=[0,100]
    rv = client.barplot.plotBar(dataset,sample,number)
    assert rv!=None

def test_getMeta(client):
    rv=client.getMeta({'acnum':'GSE6207'})
    assert rv!=None

def test_Histogram(client):
    dataset=Data('GSE6207').getDataTable()
    rv = client.histogram.plotHist(dataset)
    assert rv!=None

def test_boxPlot(client):
    dataset=Data('GSE6207').getDataTable()
    rv = client.boxplot.plotBox(dataset)
    assert rv!=None
def test_visaulize(client):
    details={'acnum':'GSE6207','gtype':'scatter'}
    rv=client.visualize(details)
    assert rv!=None