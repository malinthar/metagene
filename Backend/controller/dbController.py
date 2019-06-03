from flask_pymongo import PyMongo

class DBObj:
    def __init__(self,app):
      try:
       self.mongo=PyMongo(app)
      except:
       print("error")
    def insert(self,user):
       users=self.mongo.db.users
       return users.insert(user)
    def insertFeedback(self,feedback):
        feedbacks=self.mongo.db.feedbacks
        return feedbacks.insert(feedback)
    def insertSupTicket(self,supticket):
        suptickets=self.mongo.db.suptickets
        return suptickets.insert(supticket)
    def read(self,params):
       users=self.mongo.db.users
       return users.find_one(params)
    def insertfav(self,graph):
        favs=self.mongo.db.favs
        return favs.insert(graph)
    def readfavs(self,user):
        favs=self.mongo.db.favs
        return favs.find({'user':user},{'_id':1,'id':1,'title':1,'accession':1})
    def readfav(self,_id):
        favs=self.mongo.db.favs
        print(_id)
        return favs.find_one({'id':_id})
    
class Pool: 

    __instance = None
    __unused = list()
    __used = list()
    __max_pool_size = 3

    def __init__(self, max_pool_size=None):
        if Pool.__instance is not None:
            raise NotImplemented('Cannot create a new instance, this is a singleton class.')
        Pool.__instance = self
        if max_pool_size is not None:
            Pool.__max_pool_size = max_pool_size

    @staticmethod
    def get_pool_instance(): 
        if Pool.__instance is None:
            Pool.__instance = Pool(10)
        return Pool.__instance
    
    def create_new_instance(self,app, used=True):
        if len(self.__used) + len(self.__used) >= self.__max_pool_size:
            return None
        instance = DBObj(app)
        if used:
            self.__used.append(instance)
        else:
            self.__unused.append(instance)
        return instance

    def get_unused(self,app):
        if len(self.__unused) > 0:
            i = self.__unused.pop(0)
            self.__used.append(i)
            return i
        else:
            return self.create_new_instance(app)

    

    def return_instance(self, instance):
        if instance in self.__used:
            if instance in self.__unused:
                return False
            self.__unused.append(instance)
            self.__used.remove(instance)
            return True
        else:
            return False

    def get_all_unused(self):
        return self.__unused.copy()

    def get_all_used(self):
        return self.__used.copy()

    def get_number_of_used(self):
        return len(self.__used)

    def get_number_of_unused(self):
        return len(self.__unused)

    def max_pool_size(self):
        return self.__max_pool_size

class DBCtrl:

    
   def __init__(self,app):
      try:
       self.pool= Pool.get_pool_instance()
       self.app=app
      except:
       print("error") 
   def insert(self,user):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.insert(user)
     self.pool.return_instance(dbObj)
     return data
   def insertFeedback(self,feedback):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.insertFeedback(feedback)
     self.pool.return_instance(dbObj)
     return data
   def insertSupTicket(self,supticket):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.insertSupTicket(supticket)
     self.pool.return_instance(dbObj)
     return data
   def read(self,user_id):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.read(user_id)
     self.pool.return_instance(dbObj)
     return data
   def insertFav(self,fav):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.insertfav(fav)
     self.pool.return_instance(dbObj)
     return data
   def readfavs(self,user):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.readfavs(user)
     self.pool.return_instance(dbObj)
     return data
   def readfav(self,_id):
     dbObj=self.pool.get_unused(self.app)
     data=dbObj.readfav(_id)
     self.pool.return_instance(dbObj)
     return data  
     
     

     
