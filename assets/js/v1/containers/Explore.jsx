define(['react-redux', '../Actions', '../components/Explore/Index'], function(ReactRedux, Actions, Explore) {
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
  )(Explore)
})
