import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {

    render() {

        if(true) {
            return (<Route path={this.props.path} {...this.props} component={this.props.component} />);
        } else {
            return (<Redirect to={{ pathname: '/embedded-app', state: { from: this.props.location } }} />);
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};
  
export default connect( mapStateToProps, null)(PrivateRoute);