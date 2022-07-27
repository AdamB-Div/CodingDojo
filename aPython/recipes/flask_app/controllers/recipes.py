from flask import redirect, render_template, request, session, flash
from flask_app import app
from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

# Home Page
@app.route("/recipes")
def home_page():
    if 'email' not in session:
        return redirect("/")
    
    list_recipes = Recipe.get_all_recipes()

    return render_template("recipes.html", list_recipes = list_recipes)


# New Recipe Page
@app.route("/recipe/create")
def create_recipe_page():
    if 'email' not in session:
        return redirect("/")
    return render_template("create.html")


# New Recipe
@app.route("/recipe/create/new", methods=["POST"])
def create_recipe():
    data = {
        "name" : request.form['name'],
        "description" : request.form['description'],
        "instructions" : request.form['instructions'],
        "date_cooked" : request.form['date_cooked'],
        "under_30" : request.form['under_30'],
        "users_id" : session['user_id']
    }
    # Validate
    if Recipe.validate_recipe(request.form) == False:
        return redirect("/recipe/create")

    # Create
    Recipe.create_recipe(data)
    return redirect("/recipes")


# Delete Recipe
@app.route("/recipe/delete/<int:recipe_id>")
def delete_recipe(recipe_id):
    data = {
        "id" : recipe_id
    }
    Recipe.delete_recipe(data)
    return redirect("/recipes")


# View Recipe
@app.route("/recipe/view/<int:recipe_id>")
def view_recipe(recipe_id):
    if 'email' not in session:
        return redirect("/")

    data = {
        "id" : recipe_id
    }

    recipe = Recipe.get_single_recipe(data)

    return render_template("view.html", recipe = recipe)


# Edit Recipe
@app.route("/recipe/<int:recipe_id>/edit")
def edit_recipe_page(recipe_id):
    # Get create page but autofill info from recipe
    if 'email' not in session:
        return redirect("/")

    data = {
        "id" : recipe_id
    }

    recipe = Recipe.get_single_recipe(data)
    return render_template("edit.html", recipe = recipe)

# Confirm Edit
@app.route("/recipe/edit/<int:recipe_id>", methods=["POST"])
def edit_recipe(recipe_id):
    data = {
        "id" : recipe_id,
        "name" : request.form['name'],
        "description" : request.form['description'],
        "instructions" : request.form['instructions'],
        "date_cooked" : request.form['date_cooked'],
        "under_30" : request.form['under_30']
    }
    # Validate
    if Recipe.validate_recipe(request.form) == False:
        return redirect(f"/recipe/{recipe_id}/edit")
    
    Recipe.edit_recipe(data)
    return redirect("/recipes")