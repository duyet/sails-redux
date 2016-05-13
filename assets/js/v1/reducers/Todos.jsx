// See: http://redux.js.org/docs/basics/Reducers.html

define(['redux', '../Actions'], function (Redux, Actions) {
	const { ADD_TODO, COMPLETE_TODO, TOGGLE_TODO, VisibilityFilters } = Actions
	
	function todos (state = [], action) {
	  
		console.log(TOGGLE_TODO, 'TOGGLE_TODO')

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

		case TOGGLE_TODO:
			return state.map((todo, index) => {
				console.log('index', index)
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})

	    case COMPLETE_TODO:
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

  return todos
})
