define(['react-redux', '../Actions', '../components/Auth/Index'], function(ReactRedux, Actions, Auth) {
  const { connect } = ReactRedux
  const mapStateToProps = (state, ownProps) => {
    return {

    }
  }

  const mapDispatchToProps = (dispath, ownProps) => {
    return {

    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth)
})
