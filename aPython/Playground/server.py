from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "Hello"

@app.route("/play")
def boxes():
    return render_template("index.html")

@app.route("/play/<int:num>")
def show_boxes(num):
    return render_template("index.html", num = num)

@app.route("/play/<int:num>/<string:color>")
def color(num, color):
    return render_template("index.html", num = num, color = color)

if __name__ == "__main__":
    app.run(debug = True)