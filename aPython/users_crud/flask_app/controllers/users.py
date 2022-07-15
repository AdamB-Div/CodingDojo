from flask import redirect, render_template, request
from flask_app import app

from flask_app.models.user import User

# Get All Users for List
@app.route("/")
def index():
    users = User.get_all()
    print(users)
    return render_template("index.html", all_users = users)


# Create New User
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


# Delete User
@app.route("/user/<int:user_id>/delete")
def delete_user(user_id):
    data = {
        "user_id": user_id
    }

    User.delete(data)
    return redirect("/")


# See One User
@app.route("/user/<int:user_id>/show")
def show_user_page(user_id):

    data = {
        "id":  user_id
    }

    user = User.show_user(data)

    return render_template("show_user.html", user = user)


# Edit User
# To Edit User Page
@app.route("/user/<int:user_id>/edit")
def edit_user_page(user_id):

    data = {
        "id": user_id
    }

    user = User.show_user(data)

    return render_template("edit_user.html", user = user)

# Changing User
@app.route("/user/<int:user_id>/update", methods=["POST"])
def update_user(user_id):

    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "id": user_id
    }

    User.edit_user(data)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)