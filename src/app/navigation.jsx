import Radium from 'radium';
import React from 'react';

import Log from './log.jsx';
import Stack from './stack.jsx';

//exactly one of the menuItems needs to be active at all times!!!
var menuItems = [
  {
    title: 'Stack',
    active: true,
  },
  {
    title: 'Log',
    active: false,
  },
];

var getComponentByName = function(name) {
  switch (name) {
    case 'Stack': return (<Stack />);
    case 'Log': return (<Log />);
  }
}

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    var activeName = '';

    menuItems.map(function(item) {
      if(item.active) {
        activeName = item.title;
      }
    });

    //this.handleClick = this.handleClick.bind(this);

    this.state = {
      activeState: activeName,
    }
  }

  /*handleClick() {
    console.log('CLICK');
  }*/

  render() {
    var items = menuItems.map(function(item) {
      if(item.active) {
        var buttonStyle = Object.assign({}, styles.btn, styles.active);
      }
      else
      {
        var buttonStyle = Object.assign({}, styles.btn);
      }
      return (
        <li style={styles.li}>
          <button ref={item.title.toLowerCase()} style={buttonStyle} type="button">
            {item.title}
          </button>
        </li>
      );
    });

    var component = getComponentByName(this.state.activeState);

    return (
      <div>
        <div style={styles.nav}>
          <ul style={styles.ul}>
            {items}
          </ul>
        </div>
        {component}
      </div>
    );
  }
}

var styles = {
  nav: {
    height: '50px',
    width: '100%',
    background: '#e6e6e6',
    //'-webkit-box-shadow': '0px 4px 36px 0px rgba(0,0,0,0.03)',
    //position:'fixed',
  },
  ul: {
    height: '100%',
    margin: '0px',
    padding: '0px',
  },
  li: {
    width: '20%',
    height: '100%',
    display: 'inline-block',
    textAlign: 'center',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  btn: {
    fontWeight: 'lighter',
    height: '100%',
    width: '100%',
    padding: '0px',
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    color: '#595959',
    ':hover': {
    },
    ':focus': {
      outline: 'none',
    }
  },
  active: {
    background: 'white',
    color: '#262626',
    borderRadius: '6px 6px 0px 0px',
  },
};

export default Radium(Navigation);
