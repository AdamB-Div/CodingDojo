from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

from flask_app.controllers import recipes
from flask_app.models.user import User

from flask_app import EMAIL_REGEX, NAME_REGEX, DATABASE

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_cooked = data['date_cooked']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creator = []
    

    @staticmethod
    def validate_recipe(data):
        is_valid = True

        # Name
        if len(data['name']) < 3:
            flash("Name must be atleast 3 characters", "error_creating_recipe")
            is_valid = False
        
        # Description
        if len(data['description']) < 3:
            flash("Description must be atleast 3 characters", "error_creating_recipe")
            is_valid = False
        
        # Instructions
        if len(data['instructions']) < 3:
            flash("Instructions must be atleast 3 characters", "error_creating_recipe")
            is_valid = False
        
        # Cooked Date
        if data['date_cooked'] == "":
            flash("Date must be selected", "error_creating_recipe")
            is_valid = False
        
        return is_valid



    # Get All Recipes
    @classmethod
    def get_all_recipes(cls):

        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.users_id;"

        results = connectToMySQL(DATABASE).query_db(query)

        list_recipes = []
        print(results)

        # For Every Row
        for row in results:
            # Add Recipe Info from result object
            current_recipe = cls(row)
            # Separate User Data from Recipe Data
            user_data = {
                **row,
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at'],
                "id" : row['users.id']
            }
            # Create User in User class
            current_user = User(user_data)
            # Give Each Recipe a User attribute holding the user
            current_recipe.user = current_user
            # Add recipe to list of all recipes above
            list_recipes.append(current_recipe)
        return list_recipes
    

    # Create Recipe
    @classmethod
    def create_recipe(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, date_cooked, under_30, users_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date_cooked)s, %(under_30)s, %(users_id)s);"
    
        return connectToMySQL(DATABASE).query_db(query, data)
    

    # Delete Recipe
    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"

        return connectToMySQL(DATABASE).query_db(query, data)
    

    # Get Recipe with User
    @classmethod
    def get_single_recipe(cls, data):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.users_id WHERE recipes.id = %(id)s;"

        result = connectToMySQL(DATABASE).query_db(query, data)

        if len(result) > 0:
            current_recipe = cls(result[0])
            user_data = {
                **result[0],
                "created_at" : result[0]['users.created_at'],
                "updated_at" : result[0]['users.updated_at'],
                "id" : result[0]['users.id']
            }
            current_recipe.user = User(user_data)
            return current_recipe
        else:
            return None
    

    # Edit Recipe
    @classmethod
    def edit_recipe(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_cooked = %(date_cooked)s, under_30 = %(under_30)s WHERE id = %(id)s;"

        return connectToMySQL(DATABASE).query_db(query, data)

