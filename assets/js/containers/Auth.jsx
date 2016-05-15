define(['redux', 'react-redux', '../Actions', '../components/Auth/Index'], 
function(Redux, ReactRedux, Actions, Auth) {
  const { connect } = ReactRedux
  const { bindActionCreators } = Redux

  const mapStateToProps = (state, ownProps) => {
    return {
      isAuthenticating   : state.auth.isAuthenticating,
      statusText         : state.auth.statusText
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      actions : bindActionCreators(Actions, dispatch)
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
})
