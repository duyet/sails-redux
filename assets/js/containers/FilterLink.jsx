define(['react-redux', '../Actions', '../components/Link'], function(ReactRedux, Actions, Link) {
  const { connect } = ReactRedux
  const { setVisibilityFilter } = Actions

  const mapStateToProps = (state, ownProps) => {
    console.log('Link state ', state)
    return {
      active: ownProps.filter === state.visibilityFilters
    }
  }

  const mapDispatchToProps = (dispath, ownProps) => {
    return {
      onClick: () => {
        dispath(setVisibilityFilter(ownProps.filter))
      }
    }
  }

  const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)

  return FilterLink
})
