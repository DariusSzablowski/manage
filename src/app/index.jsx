import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>The manage app works with React now!!!</p>;
  }
}

render(<App/>, document.getElementById('app'));
