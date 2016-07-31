import Radium from 'radium';
import React from 'react';

class Navigation extends React.Component {

  /*constructor(props) {
    super(props);
    //...
  }*/

  render() {
    return (
      <div style={styles.test}>
          <ul style={styles.ul}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 2</a></li>
            <li><a href="#">Menu 3</a></li>
          </ul>
      </div>
    );
  }
}

var styles = {
  test: {
    background: '#00f00f',
  },
  ul: {
    margin: '0px',
  }
};

export default Radium(Navigation);
