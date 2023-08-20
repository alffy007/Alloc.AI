import firebase_admin
from firebase_admin import credentials,firestore

cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred) 
db=firestore.client()

def sent(task):
    db.collection("WORKERS").document("1").update({"avail":task})

def receive(value):
    data=db.collection("WORKERS").document("1").get()
    array=data.to_dict()
    r=array[value]
    return r