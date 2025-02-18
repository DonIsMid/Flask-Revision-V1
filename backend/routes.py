## importing modules ##

from flask import request, jsonify
#--------------------------------------------------------------------------------------------
## importing files ##

# import the table setup
from models import Game
from app import app, db
#--------------------------------dis------------------------------------------------------------
## app routes ##

# BOILERPLATE @app.route()

# >> get games from database

#app route to request the data from the games database
@app.route("/api/games", methods=["GET"])
# function to get games from database
def get_games():
    # query to get games in python instead of sql
    games = Game.query.all()

    # formatting and storing entries into a list
    result  = [game.to_json() for game in games]

    # returns the list of entries as json objects
    return jsonify(result)
#--------------------------------------------------------------------------------------------

# >> create game entry
@app.route("/api/games", methods=["POST"])
def create_game():
    try:
        data = request.json
        # define the data thats gonna be used
        title = data.get("title")
        genre = data.get("genre")
        description = data.get("description")
        category = data.get("category")

        # create a variable with the data that has been defined
        new_game = Game(title=title, 
                        genre=genre, 
                        description=description, 
                        category=category
                        )

        # staging the additions of data
        db.session.add(new_game)
        # committing the additions of data
        db.session.commit()

        # returns the data as a json object to the client
        return jsonify({"msg":"Game created successfully"}), 201
    # error cating
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
#--------------------------------------------------------------------------------------------
