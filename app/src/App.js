import React from 'react';
import Immutable from 'immutable';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "import numpy as np",
      answer: "",
    };
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    } else {
      var new_answer = this.state.answer + `${event.key}`;
      var new_state = {
        question: this.state.question,
        answer: new_answer
      };
      this.setState(new_state);
    }
  }

  check_answer() {
    var ok_idx = 0;
    for (var i = 0; i < Math.min(this.state.question.length, this.state.answer.length); i++) {
      if (this.state.question[i] != this.state.answer[i]){
        break;
      }
      ok_idx += 1;
    }
    return ok_idx;
  }

  render() {
    var ok_idx = this.check_answer();
    return (
      <div className="App" onKeyPress={this.handleKeyPress.bind(this)} tabIndex="0">
        <div className="Question">
          <p>
            {
              this.state.question
            }
          </p>
        </div>
        <div className="Answer">
          <p>
            <font color="#ffffff">{this.state.answer.slice(0, ok_idx)}</font>
            <font color="#ff2c34">{this.state.answer.slice(ok_idx, this.state.answer.length)}</font>
            {this.state.question.slice(ok_idx, this.state.question.length)}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
