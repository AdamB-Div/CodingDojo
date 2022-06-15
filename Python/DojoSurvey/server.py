from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Keep"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/result")
def result():
    return render_template("result.html")

@app.route("/process", methods = ['POST'])
def create_survey():
    session["new_info"] = {
        "name": request.form["name"],
        "dojo_location": request.form["dojo_location"]
    }
    return redirect("/result")

if __name__ == "__main__":
    app.run(debug = True)