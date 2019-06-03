from dataProcessor import Data
from flask import json
import numpy as np
import pandas as pd  
from bokeh.plotting import figure
from bokeh.embed import components
from bokeh.layouts import gridplot
import scipy.special
#for heat maps
from math import pi
from bokeh.models import LinearColorMapper, BasicTicker, PrintfTickFormatter, ColorBar
import itertools
from fwriter import fwrite,csvWrite
#color plattes from bokeh
from bokeh.palettes import Reds9, YlGn8, Colorblind8

#import plots
from .scatterplot import plotScatter
from .barplot import plotBar
from .heatmap import plotHeat
from .boxplot import plotBox
from .histogram import plotHist
#controllor of visulizer package
def visualize(details):
    #get accNum
    acnum=details['acnum']
    gtype=details['gtype']
    #obtain a Data Object for the GEO accession number
    try:
     dataobj=Data(acnum)
    except:
      return None
  
    #get pivoted dataset
    dataset=dataobj.getDataTable()

    if(gtype=="scatter"):
      try:
       return  plotScatter(dataset,details['genes'])
      except:
        return "Error"
    elif(gtype =="heatmap"):
      return plotHeat(dataset)
    elif(gtype =="box"):
      return plotBox(dataset)
    elif(gtype =="hist"):
      return plotHist(dataset) 
    elif(gtype =="bar"):
      return plotBar(dataset,details['sample'],details['number']) 
    else:
        return None,None

def getMeta(details):
      acnum=details['acnum']
      try:
       dataobj=Data(acnum)
      except:
        return None
      #get samples list from pivoted table
      dataset=dataobj.getDataTable()
      #generate the csv file
      csvWrite(dataset)
      samples=list(dataobj.getDataTable().columns)
      #prepare meta data
      description=dataobj.getDescription()
      
      return description,samples,dataset


  









