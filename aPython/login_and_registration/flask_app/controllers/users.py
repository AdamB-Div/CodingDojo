from flask import redirect, render_template, request, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

# Login/Register Route
@app.route("/")
def login_page():
    return render_template("login.html")


# Register User
@app.route("/user/register", methods=["POST"])
def register_user():

    if not User.validate_user(request.form):
        print("Data Not Valid")
        return redirect("/")

    user_exists = User.get_one(request.form)
    if user_exists != None:
        flash("Email Already Registered", "error_registration_email")
        return redirect("/")

    data = {
        **request.form,
        "password" : bcrypt.generate_password_hash(request.form['password'])
    }

    print("Data Valid")
    user_id = User.create_user(data)

    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    session['user_id'] = user_id

    return redirect ("/home")


# Login
@app.route("/user/login", methods = ["POST"])
def login_user():
    current_user = User.get_one(request.form)
    if current_user == None:
        flash("Wrong Email", "error_login_credentials")
        return redirect("/")

    if not bcrypt.check_password_hash(current_user.password, request.form['password']):
        flash("Wrong Password", "error_login_credentials")
        return redirect("/")

    session['first_name'] = current_user.first_name
    session['last_name'] = current_user.last_name
    session['email'] = current_user.email
    session['user_id'] = current_user.id

    return redirect("/home")


# Home Page
@app.route("/home")
def home_page():
    if 'email' not in session:
        return redirect("/")
    return render_template("home.html")


# Logout
@app.route("/logout")
def logout_user():
    session.clear()
    return redirect("/")