import pandas as pd
from dataController import getDataset
class Data:
    def __init__(self,acnum):
      try:
       self.gse=getDataset(acnum)
      except:
       print('Error')
    def getSamples(self,sampleID):
       #returns an array of sample Objects(GSM)
       samples=[]
       try:
        for id in sampleID:
          samples.append(self.gse.gsms[id])
        if(len(samples)!=0):
            for sam in samples:
             return samples
        else:
            return "Error"
       except:
         return "Error"
    def  getPlatforms(self):
       try:
        return self.gse.gpls
       except:
         return "Error"
    def getDataTable(self):
     try:
      data = self.gse.pivot_samples('VALUE')
      data=pd.DataFrame(data)
      #create Data Object
      return data
     except:
       return "Error"
    def getDescription(self):
      if(self.gse!=None):
        description={'Title':self.gse.metadata['title'],
        'GEO Accession':self.gse.metadata['geo_accession'],
        'Submission Date':self.gse.metadata['submission_date'],
        'Last Updated':self.gse.metadata['last_update_date'],
        'Summary':self.gse.metadata['summary'],'Number of Samples':str(len(self.gse.metadata['sample_id'][0])),'Supplementary File':self.gse.metadata['supplementary_file']
        }
        return description
      else:
        return None
    
   
    
 