from flask import Flask, render_template
app = Flask(__name__)

# NINJA Bonus
@app.errorhandler(404)
def page_not_found(e):
    return "Sorry! No response. Try Again."

# 1
@app.route("/")
def hello_world():
    return "Hello World!"

# 2
@app.route("/dojo")
def dojo():
    return "Dojo!"

# 3
@app.route("/say/<string:var>")
def print_string(var):
    return f"Hi {var}"

# 4
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