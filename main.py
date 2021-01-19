from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route("/")
@app.route("/home/")
def home():
    return render_template("index.html")

@app.route('/packages/')
def packages():
	return render_template("packages.html")

@app.route('/guide/')
def guide():
	return render_template("guide.html")

@app.route('/team/')
def team():
	return render_template("team.html")

@app.route("/contact/")
def contact():
	return render_template("contact.html")

if __name__ == '__main__':
    app.run(debug=True)
