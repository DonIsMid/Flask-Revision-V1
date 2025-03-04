## importing modules ##

from flask import request, jsonify
#--------------------------------------------------------------------------------------------
## importing files ##

# import the table setup
from models import Game
from app import app, db
#--------------------------------------------------------------------------------------------
## app routes ##

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

        # some inpuit handling for the fields
        required_fields = ["title", "genre", "description", "category"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error":f"Missing rerquired data {field}"}), 400


        title = data.get("title")
        genre = data.get("genre")
        description = data.get("description")
        category = data.get("category")
        image_url = data.get("image_url")

        # create a variable with the data that has been defined
        new_game = Game(title=title, 
                        genre=genre, 
                        description=description, 
                        category=category,
                        image_url=image_url
                        )

        # staging the additions of data
        db.session.add(new_game)
        # committing the additions of data
        db.session.commit()

        # returns the data as a json object to the client
        return jsonify(new_game.to_json()), 201
    # error cating
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
#--------------------------------------------------------------------------------------------

# >> update an entry
@app.route("/api/games/<int:id>", methods=["PATCH"])
def update_game(id):
    try:
        game = Game.query.get(id)
        # if the item is not in the database
        if game is None:
            return jsonify({"error":"Game not found"}), 404
        # else

        data = request.json
        # get the values to be edited
        game.title = data.get("title",game.title)
        game.genre = data.get("genre",game.genre)
        game.description = data.get("description",game.description)
        game.category = data.get("category",game.category)
        game.image_url = data.get("image_url",game.image_url)

        db.session.commit()
        return jsonify(game.to_json()), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500


#--------------------------------------------------------------------------------------------

# >> delete an entry
@app.route("/api/games/<int:id>", methods=["DELETE"])
def delete_game(id):
    try:
        game = Game.query.get(id)
        # if the item is not in the database
        if game is None:
            return jsonify({"error":"Game not found"}), 404
        # else
        
        # apply changes to db
        db.session.delete(game)
        db.session.commit()
        return jsonify({"msg":"Game Removed Successfully"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500