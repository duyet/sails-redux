define(['react-redux', '../Actions', '../components/TodoList'], function(ReactRedux, Actions, TodoList) {
  const { connect } = ReactRedux
  const { toggleTodo } = Actions

  const getVisibleTodos = (todos, filter) => {
  switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        console.log('todos.filter', todos, filter)
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        console.log('todos.filter', todos, filter)
        return todos.filter(t => !t.completed)
      default:
        return []
    }
  }

  const mapStateToProps = (state) => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilters)
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onTodoClick: (id) => {
        dispatch(toggleTodo(id))
      }
    }
  }

  const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)

  return VisibleTodoList
})
