import Radium from 'radium';
import React from 'react';

import Log from './log.jsx';
import Stack from './stack.jsx';

var getComponentByName = function(name) {
  switch (name) {
    case 'Stack': return (<Stack />);
    case 'Log': return (<Log />);
  }
}

//title should be a String and active a boolean
var Item = function(title, active) {
    this.title = title;
    this.active = active;
}

class Navigation extends React.Component {

  constructor(props) {
    super(props);

    //exactly one of the items needs to be active at all times!!!
    this.state = {
      items : [
        new Item('Stack', false),
        new Item('Log', true),
      ]
    }

    this.change = this.change.bind(this);
    this.generateItems = this.generateItems.bind(this);
  }

  change(name, event) {
    var current;

    this.state.items.map(function(item) {
      if(item.active) {
        current = item.title;
      }
    });


    if(name !== current) {
      var that = this;
      var newItems = new Array();

      this.state.items.map(function(item) {
        var b;

        if(name === item.title) {
          b = true;
        }
        else {
          b = false;
        }

        item = new Item(item.title, b);
        newItems.push(item);
      });
      console.log(newItems);

      this.setState({items: newItems});
    }
  }

  generateItems() {
    var buttonStyle;
    var that = this;

    var items = this.state.items.map(function(item) {
      if(item.active) {
        buttonStyle = Object.assign({}, styles.btn, styles.active);
      }
      else
      {
        buttonStyle = Object.assign({}, styles.btn);
      }

      return (
        <li style={styles.li}>
          <button onClick={that.change.bind(that, item.title)} ref={item.title.toLowerCase()} style={buttonStyle} type="button">
            {item.title}
          </button>
        </li>
      );
    });

    return items;
  }

  render() {
    console.log('render()');
    var component;

    this.state.items.map(function(item) {
      if(item.active) {
        component = getComponentByName(item.title);
      }
    });

    return (
      <div>
        <div style={styles.nav}>
          <ul style={styles.ul}>
            {this.generateItems()}
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
      color: '#262626',
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
