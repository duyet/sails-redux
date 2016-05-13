// The Store is the object that brings them together. The store has the following responsibilities:
//
//  - Holds application state;
//  - Allows access to state via getState();
//  - Allows state to be updated via dispatch(action);
//  - Registers listeners via subscribe(listener);
//  - Handles unregistering of listeners via the function returned by subscribe(listener).

// See: http://redux.js.org/docs/basics/Store.html

define(['redux', 'redux-thunk', 'redux-logger', './reducers/Index', './Actions' ],
function (Redux, thunkMiddleware, loggerMiddleware, Reducers, Actions) {
  const { createStore, applyMiddleware } = Redux
  // const initialState = []

  let store = createStore(
    Reducers,
    { type: 'SHOW_ALL', todos: [] }
  )

  store.dispatch(Actions.addTodo('Learn about actions'))
  store.dispatch(Actions.addTodo('Learn about actions'))

  console.log(store.getState())

  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  return store
})
