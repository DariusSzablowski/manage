import React from 'react';
import {render} from 'react-dom';

import Navigation from './navigation/navigation.jsx';

class App extends React.Component {
  render () {
    return  (
      <div>
        <Navigation />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
