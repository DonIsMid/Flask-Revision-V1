## importing (flask, flask-SQLAlchemy and flask-cors) ##

# flask is the backend framework I will be using
from flask import Flask
# SQLAlchemy allows the app to interact and use databases using python's existing tools
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#--------------------------------------------------------------------------------------------

## create the app ##

# flask needs this to be able to create configurations to allow tasks to be carried out
app = Flask(__name__)
CORS(app)
#--------------------------------------------------------------------------------------------

## adding configurations ##

# configuring the database system using sqlite which is built in to python
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///games.db" # < name of database use

# configuring the backend to not track the modifications for performance reasons
app.config["SQLACHEMY_TRACK_MODIFICATIONS"] = False
#--------------------------------------------------------------------------------------------

## initialize SQLAlchemy to the app ##

# initializes an instance of SQLAlchemy and assigns it to the app 
# allowing it to interact with the database
db = SQLAlchemy(app)
#--------------------------------------------------------------------------------------------

## Running the app ##

# the if statements makes sure that when you import this folder in another
# file, it does not immediately run,; but only runs if it is called
if __name__ == "__main__"
app.run(debug=True)