define(['react-redux', '../Actions', '../components/Topics/Index'], function(ReactRedux, Actions, Topics) {
  const { connect } = ReactRedux
  const { setVisibilityFilter } = Actions

  const mapStateToProps = (state, ownProps) => {
    return {

    }
  }

  const mapDispatchToProps = (dispath, ownProps) => {
    return {

    }
  }

  const Container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Topics)

  return Container
})
