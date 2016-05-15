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

  // Auth 
  const CHANGE_FORM = 'CHANGE_FORM'
  const SET_AUTH = 'SET_AUTH'
  const SENDING_REQUEST = 'SENDING_REQUEST'

  return {
    ADD_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,

    // Sample todoapp
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
    },

    /**
     * Sets the authentication state of the application
     * @param {boolean} newState True means a user is logged in, false means no user is logged in
     */
    setAuthState(newState) {
      return { type: SET_AUTH, newState };
    },

    /**
     * Sets the form state
     * @param  {object} newState          The new state of the form
     * @param  {string} newState.username The new text of the username input field of the form
     * @param  {string} newState.password The new text of the password input field of the form
     * @return {object}                   Formatted action for the reducer to handle
     */
    changeForm(newState) {
      return { type: CHANGE_FORM, newState };
    },

    /**
     * Sets the requestSending state, which displays a loading indicator during requests
     * @param  {boolean} sending The new state the app should have
     * @return {object}          Formatted action for the reducer to handle
     */
    sendingRequest(sending) {
      return { type: SENDING_REQUEST, sending };
    }
  }
})
