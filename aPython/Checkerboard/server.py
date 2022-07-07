from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/<int:rows>/<int:columns>")
def change_size(rows, columns):
    return render_template("change_size.html", rows=int(rows), columns=int(columns))

if __name__ == "__main__":
    app.run(debug = True)