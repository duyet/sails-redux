define(['redux', './Actions'], function (Redux, Actions) {
	const { SHOW_ALL } = Actions.VisibilityFilters;
	function visibilityFilter(state = SHOW_ALL, action) {
	  switch (action.type) {
	    case Actions.SET_VISIBILITY_FILTER:
	      return action.filter
	    default:
	      return state
	  }
	}

	function todos(state = [], action) {
	  switch (action.type) {
	    case Actions.ADD_TODO:
	      return [
	        ...state,
	        {
	          text: action.text,
	          completed: false
	        }
	      ]
	    case Actions.COMPLETE_TODO:
	      return state.map((todo, index) => {
	        if (index === action.index) {
	          return Object.assign({}, todo, {
	            completed: true
	          })
	        }
	        return todo
	      })
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