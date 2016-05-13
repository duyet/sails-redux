
define (['redux', '../Actions'], function (Redux, Actions) {
  const { SET_VISIBILITY_FILTER, VisibilityFilters } = Actions
  const { SHOW_ALL } = VisibilityFilters

  function visibilityFilter (state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }

  return visibilityFilter
})
