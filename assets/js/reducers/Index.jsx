define(['redux', './Todos', './Data', './Auth'], function (Redux, Todos, Data, Auth) {
  const { combineReducers } = Redux

  const Reducers = combineReducers({
    Todos,
    Data,
    Auth
  })

  return Reducers
})
