from flask import redirect, render_template, request
from flask_app import app

from flask_app.models.dojo import Dojo

# Home Route
@app.route("/")
def index():
    dojos = Dojo.get_all_dojos()
    return render_template("index.html", all_dojos = dojos)


# Create Dojo
@app.route("/create_dojo", methods=["POST"])
def create_dojo():
    data = {
        "name": request.form["dojo_name"]
    }

    Dojo.create_dojo(data)

    return redirect("/")


# Dojo Ninja List
@app.route("/dojo_ninjas/<int:dojo_id>")
def show_dojo_ninjas(dojo_id):

    data = {
        "id": dojo_id
    }

    dojo = Dojo.get_ninjas_by_dojo(data)

    return render_template("dojo_ninjas.html", dojo = dojo)