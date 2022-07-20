from flask import redirect, render_template, request
from flask_app import app

from flask_app.controllers.dojos import Dojo
from flask_app.models.ninja import Ninja

# Create Ninja Page
@app.route("/create_ninja")
def create_ninja():

    dojos = Dojo.get_all_dojos()

    return render_template("new_ninja.html", all_dojos = dojos)

# Create Ninja query
@app.route("/create_new_ninja", methods=["POST"])
def create_new_ninja():

    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo"]
    }

    Ninja.create_ninja(data)

    return redirect("/")