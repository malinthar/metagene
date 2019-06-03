def fwrite(script):
    print("IN File")
    try:
     with open("controller/static/assets/js/graph.js", 'w') as file:
      print(script)
      script=script.replace("</script>","")
      script=script.replace('<script type="text/javascript">',"")
      file.write(script)
      file.close()
      print("INN   Fcjdsn kkdsjdjd")
      return True
    except:
          print("Exception)")
          return False
def csvWrite(dataset):
      dataset.to_csv("controller/static/assets/json/dataset.csv", sep=',', encoding='utf-8')