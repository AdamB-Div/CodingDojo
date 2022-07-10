from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'secret_key'


@app.route("/")
def index():
    session.clear()
    return render_template("index.html")

@app.route("/destroy_session")
def destroy_session():
    session.clear()
    return redirect("/")

@app.route("/get_results", methods=["post"])
def get_results():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['checkbox'] = request.form.getlist('checkbox')
    session['radio_btn'] = request.form.getlist('radio_btn')
    session['comments'] = request.form['comments']
    print(request.form)
    return redirect("/results")

@app.route("/results")
def results():
    name = session['name']
    location = session['location']
    language = session['language']
    checkbox = session['checkbox']
    radio_btn = session['radio_btn']
    comments = session['comments']
    return render_template("results.html", name=name, location=location, language=language, comments=comments, checkbox=checkbox, radio_btn=radio_btn)


if __name__ == "__main__":
    app.run(debug=True)