// The Store is the object that brings them together. The store has the following responsibilities:
//
//  - Holds application state;
//  - Allows access to state via getState();
//  - Allows state to be updated via dispatch(action);
//  - Registers listeners via subscribe(listener);
//  - Handles unregistering of listeners via the function returned by subscribe(listener).

// See: http://redux.js.org/docs/basics/Store.html

define(['redux', './Reducers', './Actions'], function (Redux, Reducers, Actions) {
  const { createStore } = Redux
  const { todoApp } = Reducers
  const { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } = Actions

  let store = createStore(todoApp)

  console.log(store.getState())

  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // Dispatch some actions
  store.dispatch(addTodo('Learn about actions'))
  store.dispatch(addTodo('Learn about reducers'))
  store.dispatch(addTodo('Learn about store'))
  store.dispatch(completeTodo(0))
  store.dispatch(completeTodo(1))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

  // Stop listening to state updates
  unsubscribe()
})
