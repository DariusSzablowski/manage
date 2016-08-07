import Radium from 'radium';
import React from 'react';

class NavigationItem extends React.Component {
  constructor(props) {
      super(props);
   }

   render () {
     var buttonStyle;

     if(this.props.active) {
       buttonStyle = Object.assign({}, styles.btn, styles.active);
     }
     else
     {
       buttonStyle = Object.assign({}, styles.btn);
     }

     return  (
       <li style={styles.li}>
         <button onClick={this.props.change.bind(this, this.props.title)} ref={this.props.title.toLowerCase()} style={buttonStyle} type="button">
           {this.props.title}
         </button>
       </li>
     );
   }
 }

 var styles = {
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

export default Radium(NavigationItem);
