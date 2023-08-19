import firebase_admin
from firebase_admin import credentials,firestore

cred = credentials.Certificate("serviceAccount.json")
firebase_admin.initialize_app(cred) 
db=firestore.client()

def link(link):
    taskid=110
    data={taskid:link}
    db.collection("task").document("taskid").set(data)
    taskid+=1
    return None