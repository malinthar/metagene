from bokeh.plotting import figure
from bokeh.embed import components
import numpy as np
import scipy.special


def plotHist(dataset):
  mu, sigma = 0, 0.5
  hist, edges = np.histogram(dataset, density=True, bins=50)
 
  TOOLS = "hover,save,pan,box_zoom,reset,wheel_zoom"
  fig = figure(title="Histogram", background_fill_color="#fafafa",tools=TOOLS, toolbar_location='below',plot_width=1090, plot_height=600)
  fig.quad(top=hist, bottom=0, left=edges[:-1], right=edges[1:],
           fill_color="navy", line_color="white", alpha=0.5)
  #x = np.linspace(-2, 2, 1000)
  #pdf = 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x-mu)**2 / (2*sigma**2))
  #cdf = (1+scipy.special.erf((x-mu)/np.sqrt(2*sigma**2)))/2
  #fig.line(x, pdf, line_color="#ff8888", line_width=4, alpha=0.7, legend="PDF")
  #fig.line(x, cdf, line_color="orange", line_width=2, alpha=0.7, legend="CDF")
  fig.y_range.start = 0
  fig.legend.location = "center_right"
  fig.legend.background_fill_color = "#fefefe"
  fig.xaxis.axis_label = 'Expression level'
  fig.yaxis.axis_label = 'Pr(x)'
  fig.grid.grid_line_color="white"
  script, div = components(fig)
  description=''
  return script,div,description