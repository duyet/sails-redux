define(['react-redux', '../Actions', '../components/TodoList'], function(ReactRedux, Actions, TodoList) {
  const { connect } = ReactRedux
  const { toggleTodo } = Actions

  const getVisibleTodos = (todos, filter) => {
  switch (filter) {
      case Actions.VisibilityFilters.SHOW_ALL:
        return todos
      case Actions.VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case Actions.VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
    }
  }

  const mapStateToProps = (state) => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
