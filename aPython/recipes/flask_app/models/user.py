from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

from flask_app.controllers import users

from flask_app import EMAIL_REGEX, NAME_REGEX, DATABASE

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # Validate User Data
    @staticmethod
    def validate_user(data):
        is_valid = True

        # First Name
        if len(data['first_name']) < 2:
            flash("First Name must be at least 2 characters", "error_registration_first_name")
            is_valid = False
        if not NAME_REGEX.match(data['first_name']):
            flash("First Name must be only letters", "error_registration_first_name")
            is_valid = False

        # Last Name
        if len(data['last_name']) < 2:
            flash("Last Name must be at least 2 characters", "error_registration_last_name")
            is_valid = False
        if not NAME_REGEX.match(data['last_name']):
            flash("Last Name must be only letters", "error_registration_last_name")
            is_valid = False

        # Email
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!", "error_registration_email")
            is_valid = False

        # Password
        if len(data['password']) < 8:
            flash("Password must be at least 8 characters", "error_registration_password")
            is_valid = False
        if data['password'] != data['password_confirm']:
            flash("Passwords do not match", "error_registration_password")
            is_valid = False

        return is_valid


    # Get One User (Check for Validation Purposes)
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"

        result = connectToMySQL(DATABASE).query_db(query, data)

        if len(result) > 0:
            current_user = cls(result[0])
            return current_user
        else:
            return None


    # Create User in Database
    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s);"

        result = connectToMySQL(DATABASE).query_db(query, data)

        return result