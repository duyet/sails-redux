
define(['redux', './Todos', './VisibilityFilters'], function (Redux, Todos, VisibilityFilters) {
  const { combineReducers } = Redux

  const Reducers = combineReducers({
    Todos,
    VisibilityFilters
  })

  return Reducers
})
