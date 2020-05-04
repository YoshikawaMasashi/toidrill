import os

import flask
import numpy as np
import glob
import toml

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

@app.route('/api/files')
def files():
    directory = flask.request.args.get('directory', '')
    if directory == "":
        directory = "."
    
    files_dict = {}
    for path in glob.glob("{}/*".format(directory)):
        files_dict[path] = os.path.isdir(path)
    return flask.jsonify(files_dict)

@app.route('/api/read_file')
def read_file():
    path = flask.request.args.get('path', '')
    if path == "":
        return flask.jsonify({"result": "err"})

    try:
        dict_toml = toml.load(open(path))
    except:
        return flask.jsonify({"result": "err"})
    
    return flask.jsonify({
        "result": "ok",
        "toml": dict_toml
    })
