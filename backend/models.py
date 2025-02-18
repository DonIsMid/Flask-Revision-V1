## importing modules ##

#importing the SQLAlchemy instance from app.py which 
# allows database interaction through python
from app import db
#--------------------------------------------------------------------------------------------

## creating models for the database which translate to tables ##
class Games(db.Model):
    # defining the fields that would go into the table

    #(id,title,genre,description,category,image_url)
    id = db.Column()
    title = db.Column()
    genre = db.Column()
    description = db.Column()
    category = db.Column()
    image_url = db.Column()
#--------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------
#--------------------------------------------------------------------------------------------
