define(['react-redux', '../Actions', '../components/Link'], function(ReactRedux, Actions, Link) {
  const { connect } = ReactRedux
  const { setVisibilityFilter } = Actions

  const mapStateToProps = (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  }

  const mapDispatchToProps = (dispath, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }

  const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)

  return FilterLink
})
