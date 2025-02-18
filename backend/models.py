## importing modules ##
#--------------------------------------------------------------------------------------------

## importing files ##

#importing the SQLAlchemy instance from app.py which 
# allows database interaction through python
from app import db
#--------------------------------------------------------------------------------------------

## creating models for the database which translate to tables ##
class Game(db.Model):
    # defining the fields that would go into the table

    #(id,title,genre,description,category,image_url)
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(10), nullable=False)
    image_url = db.Column(db.String(200), nullable=True)

    # this is a function converts our data as a python 
    # dictionary to json form which is readable by the frameworks
    def to_json(self):
        return {
            "id":self.id,
            "title":self.title,
            "genre":self.genre,
            "description":self.description,
            "category":self.category,
            "imageUrl":self.image_url,
        }
#--------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------
