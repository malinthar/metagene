from bokeh.plotting import figure
from bokeh.embed import components
import scipy.special
from math import pi
import itertools

def plotBox(dataset):
  samples=list(dataset.columns)
  #define quantiles for separating expression data into regions
  q1=dataset.quantile(q=0.25)
  q2=dataset.quantile(q=0.5) 
  q3=dataset.quantile(q=0.75)
  #desfine sizes of boxes
  iqr=q3-q1
  upper = q3 + 1.5*iqr
  lower = q1 - 1.5*iqr
  #obtain outliers common to each sample(time point )
  def outliers(sample):
    name = sample.name
    return sample[(sample.values > upper.loc[name]) | (sample.values< lower.loc[name])]
  out = dataset.apply(outliers).dropna()
  
  if not out.empty:
    outx = []
    outy = []
    for keys in out.columns:
        outy.append(list(out[keys].values[::]))
        for i in range(0,len(list(out[keys].values[::]))):
          outx.append(keys)
    outy=list(outy)
    outy=list(itertools.chain(*outy))
    print(len(outy))
  TOOLS = "hover,save,pan,box_zoom,reset,wheel_zoom"
  fig = figure(title="Box Plot", tools=TOOLS, toolbar_location='below',x_axis_label='Samples', y_axis_label='Expression levels', background_fill_color="#efefef", x_range=samples,plot_width=1090, plot_height=600) 
  qmin = dataset.quantile(q=0.00)
  qmax = dataset.quantile(q=1.00)

  upper = [min([x,y]) for (x,y) in zip(list(qmax),upper)]
  lower = [max([x,y]) for (x,y) in zip(list(qmin),lower)]

  fig.segment(samples, upper,samples, q3, line_color="black")
  fig.segment(samples, lower, samples, q1, line_color="black")

  fig.vbar(samples, 0.7, q2, q3, fill_color="#E08E79", line_color="black")
  fig.vbar(samples, 0.7, q1, q2, fill_color="#3B8686", line_color="black")

  fig.rect(samples, qmin, 0.2, 0.01, line_color="black")
  fig.rect(samples, qmax, 0.2, 0.01, line_color="black")

  if not out.empty:
    print(len(outx))
    print(len(outy))
    fig.circle(outx,outy, size=2, color="#F38630", fill_alpha=0.6)
  fig.xgrid.grid_line_color = None
  fig.ygrid.grid_line_color = "white"
  fig.grid.grid_line_width = 2
  fig.xaxis.major_label_text_font_size="9pt"
  script, div = components(fig)
  description=''
  return script,div,description