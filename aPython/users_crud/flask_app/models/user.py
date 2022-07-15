# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Show All Users
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"

        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('users_schema').query_db(query)
        
        # Create an empty list to append our instances of users
        users = []

        # Iterate over the db results and create instances of users with cls.
        for user in results:
            users.append( cls(user) )
        return users

    # Save New User
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES ( %(first_name)s, %(last_name)s, %(email)s);"

        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('users_schema').query_db(query, data)

    # Delete User
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id = %(user_id)s"

        return connectToMySQL('users_schema').query_db(query, data)


    # Show User
    @classmethod
    def show_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"

        result = connectToMySQL('users_schema').query_db(query, data)

        return result[0]


    # Edit User
    @classmethod
    def edit_user(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;"

        return connectToMySQL('users_schema').query_db(query, data)



