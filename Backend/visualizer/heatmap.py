from bokeh.models import LinearColorMapper, BasicTicker, PrintfTickFormatter, ColorBar
from bokeh.palettes import Reds9, YlGn8, Colorblind8
from bokeh.plotting import figure
from bokeh.embed import components
import pandas as pd
import scipy.special
import numpy as np
from math import pi
def plotHeat(dataset):
    dataset.columns.name='samples'
    dataset=dataset.head(100)
    datastack=dataset.stack()  
    datastack=pd.DataFrame(datastack,columns=['rate']).reset_index()
    ids=list(dataset.index)
    names=list(dataset.columns)
    colors = ["#75968f", "#a5bab7", "#c9d9d3", "#e2e2e2", "#dfccce", "#ddb7b1", "#cc7878", "#933b41", "#550b1d"]
    mapper = LinearColorMapper(palette=Colorblind8, low=datastack.rate.min(), high=datastack.rate.max())

    TOOLS = "hover,save,pan,box_zoom,reset,wheel_zoom,lasso_select,tap"
    #removed due to massive number of properties
    #

    fig = figure(title="Heat Map",
            x_range=names, y_range=list(reversed(ids)),
            x_axis_location="above", plot_width=1090, plot_height=600,
            x_axis_label='Samples', y_axis_label='Genes',
            tools=TOOLS, toolbar_location='below',
            tooltips=[('ID', '@ID_REF'),('sample', '@samples'), ('Expression level', '@rate%')])

    fig.grid.grid_line_color = None
    fig.axis.axis_line_color = None
    fig.axis.major_tick_line_color = None
    fig.axis.major_label_text_font_size = "5pt"
    fig.axis.major_label_standoff = 0
    fig.xaxis.major_label_orientation = pi / 3
    fig.rect(x="samples", y="ID_REF", width=1, height=1,
        source=datastack,
        fill_color={'field': 'rate', 'transform': mapper},
        line_color=None)

    color_bar = ColorBar(color_mapper=mapper, major_label_text_font_size="5pt",
                        ticker=BasicTicker(desired_num_ticks=len(colors)),
                        formatter=PrintfTickFormatter(format="%d%%"),
                        label_standoff=6, border_line_color=None, location=(0, 0))
    fig.add_layout(color_bar, 'right')
    script,div=components(fig)
    description=''
    return script,div,description