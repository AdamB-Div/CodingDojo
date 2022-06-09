from flask import Flask
# Importing Flask, Flask is now a class.
app = Flask(__name__)
# Application launch

@app.route("/hello")
# This defines the route url.  You have to go to this address to see any content
def hello_from_flask():
    return "Hello class! This message is coming from your first server in flask!"

@app.route("/goodbye")
def goodbye_flask():
    return "Goodbye my Son"

@app.route("/number/<int:num>")
def print_number(num):
    print("Number sent from URL:", num)
    return f"Your number is {num}"

if __name__ == "__main__":
    app.run(debug = True)
    # This code is needed to run your enviroment and be in an active state when you run this file.