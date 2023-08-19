import firebase_admin
from firebase_admin import credentials,firestore

cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred) 
db=firestore.client()

def link(r,deadline,id):
    idnum=1013
    data={"id":id,"deadline":deadline,"work":r}
    db.collection("tasks").document(str(idnum)).set(data)
    idnum+=1
    return "done"

