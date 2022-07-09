from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/checkout", methods=["POST"])
def checkout():
    strawberry = int(request.form["strawberry"])
    raspberry = int(request.form["raspberry"])
    apple = int(request.form["apple"])
    total_fruits = strawberry + raspberry + apple
    print(request.form)
    return render_template("checkout.html", total_fruits=total_fruits)


@app.route("/fruits")
def fruits():
    return render_template("fruits.html")


if __name__ == "__main__":
    app.run(debug=True)
