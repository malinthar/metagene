from bokeh.plotting import figure
from bokeh.embed import components
def plotScatter(dataset,genes):
  gene1=genes[0]
  gene2=genes[1]
  fig = figure(title='Scatter Plot',
             plot_width=1090, plot_height=600,
             x_axis_label=gene1, y_axis_label=gene2,
             toolbar_location='below')
  fig.scatter(gene1,gene2,source=dataset,line_color="navy", fill_color="orange", alpha=0.5)
  description=''
  script, div = components(fig)
  return script,div,description