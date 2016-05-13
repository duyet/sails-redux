// See: http://redux.js.org/docs/basics/Reducers.html

define(['redux', './Actions'], function (Redux, Actions) {
	const { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters } = Actions
	const { SHOW_ALL } = VisibilityFilters
	const { combineReducers } = Redux

	// const initialState = {
	//   visibilityFilter: SHOW_ALL,
	//   todos: []
	// }

	function visibilityFilter (state = SHOW_ALL, action) {
	  switch (action.type) {
	    case SET_VISIBILITY_FILTER:
	      return action.filter
	    default:
	      return state
	  }
	}

	function todos (state = [], action) {
	  switch (action.type) {
	    case ADD_TODO:
	      return [
	        ...state,
	        {
						id: action.id,
	          text: action.text,
	          completed: false
	        }
	      ]
	    case COMPLETE_TODO:
	      return state.map((todo, index) => {
	        if (index === action.index) {
	          return Object.assign({}, todo, {
	            completed: true
	          })
	        }
	        return todo
	      })

				case TOGGLE_TODO:
					console.log(action, 'Toggle')
					if (state.id !== action.id) {
						return state
					}

					return Object.assign({}, state, {
						completed: !state.completed
					})

				case 'SET_VISIBILITY_FILTER':
					return action.filter

	    default:
	      return state
	  }
	}

	const todoApp = combineReducers({
	  visibilityFilter,
	  todos
	})

	return todoApp
})
