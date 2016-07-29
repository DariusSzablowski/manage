import React from 'react';
import {render} from 'react-dom';

import Navigation from './navigation.jsx';

class App extends React.Component {
  render () {
    return  (
      <div>
        <Navigation />
        <p>The manage app works with React now!!!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
