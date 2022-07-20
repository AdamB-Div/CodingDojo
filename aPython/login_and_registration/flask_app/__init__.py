from flask import Flask
import re

app = Flask(__name__)
app.secret_key = "secrets"

DATABASE = "login_assignment"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

NAME_REGEX = re.compile(r'^[a-zA-Z]{2,50}$')
