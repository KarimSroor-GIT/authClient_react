import React, { Component } from 'react';
import { connect } from 'react-redux';
export default ChildComponent => {
  class ComposedComponent extends Component {
    //  component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    //  component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (this.props.authenticated == '') {
        console.log(this.props.authenticated);
        this.props.history.push('/');
        
      }
      else{
        //console.log(this.props.authenticated);
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
};