from flask import Flask, render_template
app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try Again."

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/dojo")
def dojo():
    return "Dojo!"

@app.route("/say/<string:num>")
def print_string(num):
    return f"Hi {num}"

@app.route("/repeat/<int:val>/<string:word>")
def print_word(val, word):
    print(val)
    print(word)
    temp = ""
    for i in range(0, int(val)):
        temp += f"{word} "
    return temp

if __name__ == "__main__":
    app.run(debug = True)