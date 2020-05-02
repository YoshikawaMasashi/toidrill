import flask
import numpy as np

question_list = [
    "import numpy as np",
    # "import toid",
    # "print('debug')",
]

app = flask.Flask(__name__, static_folder="./app/build/static", template_folder="./app/build")

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route('/api/question')
def question():
    return flask.jsonify({'question': np.random.choice(question_list)})
