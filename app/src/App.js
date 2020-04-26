import React from 'react';
import Immutable from 'immutable';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div className="App">
        <div className="Question">
          <p>
            import numpy as np
          </p>
        </div>
        <div className="Answer">
          <p>
            <font color="#ffffff">import num</font>py as np
          </p>
        </div>
      </div>
    );
  }
}

export default App;
