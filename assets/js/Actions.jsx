// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store. You send them to the store
// using store.dispatch().
// See: http://redux.js.org/docs/basics/Actions.html

define([], function () {
  // ACTION TYPE
  // For a small project, it might be easier to just use
  // string literals for action types. However, there are
  // some benefits to explicitly declaring constants in
  // larger codebases.
  const ADD_TODO = 'ADD_TODO'
  const COMPLETE_TODO = 'COMPLETE_TODO'
  const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
  const TOGGLE_TODO = 'TOGGLE_TODO'
  const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  let nextTodoId = 0
  const addTodo = (text) => {
    return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
    }
  }

  return {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    addTodo,
    completeTodo (index) {
      return { type: COMPLETE_TODO, index }
    },
    setVisibilityFilter (filter) {
      return { type: SET_VISIBILITY_FILTER, filter }
    },
    toggleTodo (id) {
      return { type: TOGGLE_TODO, id }
    }
  }
})
