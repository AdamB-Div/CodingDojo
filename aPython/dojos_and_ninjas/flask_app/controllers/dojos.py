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

if __name__ == "__main__":
    app.run(debug=True)