from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route("/")
def index():
    session.clear()
    if not session:
        session['random_int'] = random.randint(1, 100)
        random_int = session['random_int']
        return render_template("index.html", random_int = random_int)
    return render_template("index.html")

@app.route("/wrong")
def wrong_guess():
    guess = session['guess']
    random_int = session['random_int']
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 1
    count = session['count']
    return render_template("wrong_guess.html", guess = guess, random_int = random_int, count = count)

@app.route("/right")
def right_guess():
    return render_template("right_guess.html")

@app.route("/guess", methods = ["POST"])
def guess():
    session['guess'] = int(request.form['guess'])
    guess = session['guess']
    if guess == session['random_int']:
        return redirect("/right")
    else:
        return redirect("/wrong")

if __name__ == "__main__":
    app.run(debug=True)