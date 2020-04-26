import flask

app = flask.Flask(__name__, static_folder="./app/build/static", template_folder="./app/build")

@app.route("/")
def index():
    return flask.render_template("index.html")
