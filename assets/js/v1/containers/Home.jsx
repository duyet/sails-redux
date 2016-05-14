define(['react-redux', '../Actions', '../components/Home/Index'], function(ReactRedux, Actions, Home) {
  const { connect } = ReactRedux
  const { setVisibilityFilter } = Actions

  const mapStateToProps = (state, ownProps) => {
    return {
      title: 'Medica Talk'
    }
  }

  const mapDispatchToProps = (dispath, ownProps) => {
    return {

    }
  }

  const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)

  return HeaderContainer
})
