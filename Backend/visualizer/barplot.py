from bokeh.plotting import figure
from bokeh.embed import components
from math import pi
def plotBar(dataset,sample,number):
  if(sample!=None and number!=None):
   try:
        #Define custom tool bar 
        TOOLS = "hover,save,pan,box_zoom,reset,wheel_zoom"
        #xaxis range
        x=list(dataset.index)[number[0]:number[1]]

        fig = figure(x_range=x, plot_width=1090, plot_height=600,title="Bar plot at "+str(sample),
                toolbar_location='below', tools=TOOLS)
        # define vericle bars,width is dynamically assigned according to the number of records
        fig.vbar(x=x, top=dataset[sample][number[0]:number[1]],width=50/(number[1]-number[0]))
        #customize the attributes of the graph
        fig.xgrid.grid_line_color = 'white'
        fig.ygrid.grid_line_color = "white"
        fig.y_range.start = 0
        fig.xaxis.axis_label='Genes'
        fig.yaxis.axis_label='Expression Level'
        fig.xaxis.major_label_text_font_size="9pt"
        fig.xaxis.major_label_orientation = pi/2
        script, div = components(fig)
        description=''
        return script,div,description
   except:
           return None
  else:
    return None