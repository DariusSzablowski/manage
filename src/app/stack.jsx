import React from 'react';
import Radium from 'radium';

class Stack extends React.Component {
  render () {
    return  (
      <div style={styles.content}>
      This is the Stack!!!
      </div>
    );
  }
}

var styles = {
  content: {
    display: 'block',
    margin: '20px',
    color: '#262626',
    fontWeight: 'lighter',
  }
};

export default Radium(Stack);
