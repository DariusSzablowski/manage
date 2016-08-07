import React from 'react';
import Radium from 'radium';

class Log extends React.Component {
  render () {
    return  (
      <div style={styles.content}>
      This is the Log!!!
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
export default Radium(Log);
