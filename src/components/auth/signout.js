import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Signout extends Component {

  componentDidMount(){
    this.props.signout();
  }
  render(){
    return (<div> sorry to see you leave , hope you will visit site again soon</div>)
  };
} 

export default connect (null, actions)(Signout);