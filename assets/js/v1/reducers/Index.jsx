
define(['redux', './Todos', './VisibilityFilters'], function (Redux, todos, visibilityFilters) {
  const { combineReducers } = Redux

  const Reducers = combineReducers({
    todos,
    visibilityFilters
  })

  return Reducers
})
