from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'secret_key'


@app.route("/")
def index():
    if 'times_visited' in session:
        session['times_visited'] += 1
    else:
        session['times_visited'] = 1
    times_visited = session['times_visited']
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1
    counter = session['counter']
    return render_template("index.html", counter = counter, times_visited = times_visited)

@app.route("/destroy_session")
def destroy_session():
    session.clear()
    return redirect("/")

@app.route("/by_two")
def by_two():
    if 'times_visited' in session:
        session['times_visited'] += 1
    else:
        session['times_visited'] = 1
    times_visited = session['times_visited']
    if 'counter' in session:
        session['counter'] += 2
    counter = session['counter']
    return render_template("index.html", counter = counter, times_visited = times_visited)

@app.route("/value", methods = ['POST'])
def value():
    value = int(request.form['value'])
    if 'times_visited' in session:
        session['times_visited'] += 1
    else:
        session['times_visited'] = 1
    times_visited = session['times_visited']
    if 'counter' in session:
        session['counter'] += value
        counter = session['counter']
    return render_template("index.html", counter = counter, times_visited = times_visited)

if __name__ == "__main__":
    app.run(debug=True)