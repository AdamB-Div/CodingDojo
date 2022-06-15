from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Keep"

@app.route("/")
def home():
    if 'number' in session:
        session['number'] += 1
    else:
        session['number'] = 0
    return render_template("index.html")

@app.route("/destroy_session")
def kill():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug = True)