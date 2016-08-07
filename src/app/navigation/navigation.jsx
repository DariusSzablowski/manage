import Radium from 'radium';
import React from 'react';

import NavigationItem from './navigation-item.jsx';
import Log from '../log.jsx';
import Stack from '../stack.jsx';

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

  //changes the active tab
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

      this.setState({items: newItems});
    }
  }

  //generates the menu items used in the navigation
  generateItems() {
    var that = this;

    var items = this.state.items.map(function(item) {
      return (
        <NavigationItem change={that.change} title={item.title} active={item.active} />
      );
    });

    return items;
  }

  render() {
    var component;

    this.state.items.map(function(item) {
      if(item.active) {
        component = getComponentByName(item.title);
      }
    });

    return (
      <div>
       <div style={styles.space} />
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
  space: {
    height: '15px',
    background: '#e6e6e6',
  },
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
    borderBottom: '1px '
  },
};

export default Radium(Navigation);
