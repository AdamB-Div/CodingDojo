from flask import redirect, render_template, request
from flask_app import app

from flask_app.models.user import User

# Get All Users for List
@app.route("/")
def index():
    users = User.get_all()
    print(users)
    return render_template("index.html", all_users = users)

@app.route("/create")
def render_create_form():
    return render_template("create.html")

@app.route("/create_user", methods=["POST"])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }

    User.save(data)

    return redirect("/")

@app.route("/delete_user/<int:user_id>")
def delete_user(user_id):
    data = {
        "user_id": user_id
    }

    User.delete(data)
    return redirect("/")

@app.route("/show")
def show():
    user = User.show_user()
    return render_template("show_user.html", user = user)

@app.route("/show/<int:user_id>")
def show_user(user_id):
    data = {
        "user_id": user_id
    }

    User.show_user(data)
    return redirect("/show")


if __name__ == "__main__":
    app.run(debug=True)