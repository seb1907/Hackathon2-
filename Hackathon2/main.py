from flask import Flask,render_template,request,Response,url_for

app = Flask(__name__)



@app.route("/")
def index():
   return render_template('main.html')

@app.route("/result", methods=['POST'])
def result():
    return render_template('recieved.html')

@app.route("/stock")
def stock():
    return render_template('stock.html')

@app.route("/suppliers")
def suppliers():
    return render_template('suppliers.html')

@app.route("/Todo")
def todo():
    return render_template('todo.html')

@app.route("/users")
def users():
    return render_template('users.html')

@app.route("/withdrawn")
def withdrawn():
    return render_template('withdrawn.html')


if __name__ == "__main__":
   app.run( debug=True ,port=5001)