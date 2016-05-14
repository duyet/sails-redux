define(['react-redux', 'app/Rest', 'app/Actions', 'app/components/Home/Index'], function(ReactRedux, Rest, Actions, Home) {
  const { connect } = ReactRedux
  const { setVisibilityFilter } = Actions

  const mapStateToProps = (state, ownProps) => {
    return {

    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchCategory: () => {
        dispatch(Rest.actions.category.sync());
      }
    }
  }

  const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)

  return HomeContainer
})
