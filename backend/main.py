from flask import *
import response,task
app=Flask(__name__)


@app.route("/question",methods=['POST'])
def index():
    sentence=request.json['work']
    r=response.question(sentence)
    return {"result":r}
@app.route("/task1",method=['post'])
def index():
    task1=request.json['task']
    r=task.link(task1)
    return None

if __name__=="__main__":
    app.run(debug=True,port=6000)