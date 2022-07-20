# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninja

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []


    # Get All Dojos
    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * FROM dojos;"

        results = connectToMySQL('dojos_and_ninjas').query_db(query)

        dojos = []

        for dojo in results:
            dojos.append(cls(dojo))
        return dojos


    # Create New Dojo
    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"

        return connectToMySQL('dojos_and_ninjas').query_db(query, data)


# Get A Dojo and all its Ninjas
    @classmethod
    def get_ninjas_by_dojo(cls, data):
        query = "SELECT * FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"

        # Always make a results instance
        results = connectToMySQL('dojos_and_ninjas').query_db(query, data)

        dojo = cls(results[0])

        for row in results:
            # Prints in console if you need example
            # dictionaries will have keys of id...name... but when they repeat, it'll be ninjas.id, ninjas.created_at.
            print(row)
            # Add those to a new dictionary to pass objects
            ninja_data = {
                **row,
                "id" : row["ninjas.id"],
                "created_at" : row["ninjas.created_at"],
                "updated_at" : row["ninjas.updated_at"]
            }
            # Create the ninja as a class object
            ninja = Ninja(ninja_data)
            # add that ninja to the list of ninjas we have in every dojo (line 11)
            dojo.ninjas.append(ninja)

        return dojo