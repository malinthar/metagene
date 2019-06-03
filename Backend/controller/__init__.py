
from flask import Flask,render_template,flash,redirect,session,url_for,logging,request,session,jsonify,json
from passlib.hash import sha256_crypt
from functools import wraps
from fwriter import fwrite,csvWrite
from bson.objectid import ObjectId
from datetime import datetime,timedelta
from visualizer import visualize,getMeta
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)
import os
from .dbController import DBCtrl


#Initialize the flask instance, __name__ refers to the name of the current module

def  create_app(test_config=None):
    app=Flask(__name__,static_url_path='/static')
    app.config.from_mapping(
            SECRET_KEY='noobhashspoiler123654789',
    )
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    #Config MongoDB using pymongo package 
    app.config["MONGO_URI"] = "mongodb://metaown:metaown123@ds143326.mlab.com:43326/metagene"
    
    if test_config is None:
    # load the instance config, if it exists, when not testing
     app.config.from_pyfile('config.py', silent=True)
    else:
    # load the test config if passed in
     app.config.from_mapping(test_config)
    try:
      os.makedirs(app.instance_path)
    except OSError:
        pass
    #setup bcrypt and jwt encryption schemas
    bcrypt=Bcrypt(app)
    jwt=JWTManager(app)

    #Trigger middleware
    CORS(app)
    #Routes------------------------------------------------------------------

    #Generates plots 
    
    
    @app.route('/users/plot',methods=['POST','GET'])
    def plot():
        if(request.get_json()['accnum']!=None and request.get_json()['gtype']!=None):
            details={'acnum':request.get_json()['accnum'],'gtype':request.get_json()['gtype'],'genes':request.get_json()['genes'],'sample':request.get_json()['sample'],'number':request.get_json()['number']}
            #obtain the javascript script, HTML DOM element and description corresponding to the plot 
            script,div,description=visualize(details)
            #assemble to be sent as a json object
            data={
                'div':div,
                'description':description,
                'script':script
            }
            print(data)
            #write the new script in the file in the client assets folder
            fwrite(script)
            return jsonify(data)
        else:
                result={"error:Invalid Accession Number"}
                return jsonify(result)

    #returns metadata of the dataset
    @app.route('/users/meta',methods=['POST'])
    def meta():
      if(request.get_json()!=None):
        if(request.get_json()['accnum']!=None):
            details={'acnum':request.get_json()['accnum'],'gtype':'' ,'genes':'','number':''}
            #obtain description of the dataset, list of samples(time point) and the dataset
            description={}
            description,genes,dataset=getMeta(details)
            #assemble the data to be sent 
            data={ 
                'genes':genes,
                'description':description
            }
            return jsonify(data)
        else:
                result={'error':"Invalid Accession Number"}
                return jsonify(result)
      else:
          result={'error':"Invalid Accession Number"}
          return jsonify(result)
    #register
    @app.route('/users/register',methods=['POST'])
    def register():
        #hook up with the monho db users collection
        global app
        #make a db connection
        dbctrl=DBCtrl(app)

        #prepare the user details to be sent 
        name=request.get_json()['name']
        email=request.get_json()['email']
        password=bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
        created=datetime.utcnow()
        user={
            'name':name,
            'email':email,
            'password':password,
            'created':created
        } 
        #insert the new user to db
        user_id=dbctrl.insert(user)
        #make sure that  new user has been registered properly
        new_user=dbctrl.read({'_id':user_id})
        if(new_user):
          result={'email':new_user['email']+"registered"}
          return jsonify({'result':result})
        else:
            result={'stat':"Unsuccessful"}
            return jsonify({'result':result})

    #login
    @app.route('/users/login',methods=['POST'])
    def login():
        email=request.get_json()['email']
        password=request.get_json()['password']
        dbctrl=DBCtrl(app)
        #find the user having corresponding credentails
        response=dbctrl.read({'email':email})
        if response:
            #If a user exists ,authenticate  the user
            if bcrypt.check_password_hash(response['password'],password):
                expires = timedelta(days=1)
                access_token=create_access_token(identity={
                    'name':response['name'],
                    'email':response['email']
                },expires_delta=expires)
                result=jsonify({"token":access_token,'email':response['email']})
            else:
                result=jsonify({'error':"Invalid  password"})
        else:
            
            result=jsonify({'result':"Invalid email"})
        
        return result
    @app.route('/users/feedback',methods=['POST'])
    def feedback():
        dbctrl=DBCtrl(app)
        ticket=request.get_json()
        feedback={
            'titile':ticket['title'],
            'description':ticket['description'],
            'datetime': datetime.now()
        }
        id_feedback=dbctrl.insertFeedback(feedback)
        if(id_feedback):
         return jsonify({'result':'success'})
        else:
         return jsonify({'result':'failed'})
    @app.route('/users/support',methods=['POST'])
    def support():
        dbctrl=DBCtrl(app)
        ticket=request.get_json()
        supticket={
            'titile':ticket['title'],
            'description':ticket['description'],
            'user':ticket['email'],
            'datetime': datetime.now()
        }
        id_sup=dbctrl.insertSupTicket(supticket)
        if(id_sup):
         return jsonify({'result':'success'})
        else:
         return jsonify({'result':'failed'})
    @app.route('/users/savetofav',methods=['POST'])
    def savefav():
        dbctrl=DBCtrl(app)
        data=request.get_json()
        graph={
            'id':str(datetime.now()),
            'user':data['email'],
            'description':data['desc'],
            'div':data['div'],
            'script':data['script'],
            'datetime': datetime.now(),
            'title':data['title'],
            'accession':data['accession']
        }
        id_=dbctrl.insertFav(graph)
        if(id_):
         return jsonify({'result':'success'})
        else:
         return jsonify({'result':'failed'})

    @app.route('/users/getfavs',methods=['POST'])
    def getfav():
        dbctrl=DBCtrl(app)
        user=request.get_json()['user']
        data=dbctrl.readfavs(user)
        if(data):
         result=[]
         for document in data:
            time_stamp=document['_id'].generation_time
            id_=str(document['id'])
            title=document['title']
            accession=document['accession']
            result.append([time_stamp,id_,title,accession[0]])
         return jsonify({'result':'success','data':result})
        else:
         return jsonify({'result':'failed'})

    @app.route('/users/viewfav',methods=['POST'])
    def viewfav():    
        dbctrl=DBCtrl(app)
        _id=str(request.get_json()['_id'])
        data=dbctrl.readfav(_id)
        if(data):
            script=data['script']
            div=data['div']
            description=data['description']
            script=data['script']
            fwrite(str(script))
            return jsonify({'result':'success','div':div,'description':description,'script':script})
        else:
            return jsonify({'result':'failed'})
    @app.route('/')
    def home():
        return render_template('index.html')
    @app.route('/<path:path>')
    def catch_all(path):
      return render_template('index.html')

    return app
#Server
app=create_app()

#if(__name__)=='__main__':
    #app.run(debug=True)