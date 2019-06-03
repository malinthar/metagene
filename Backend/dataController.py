import GEOparse
#get data from GEO DATABASE provided the accession number
def getDataset(acnum):
   #gse returned as a object GSE which contains gpls and gsms dicts
   try:
    gse = GEOparse.get_GEO(geo=acnum, destdir="./DataSets")
    return gse
   except:
    return "Error"



