define(['react', 'react-redux', '../Actions'], function (React, ReactRedux, Actions) {
  const { connect } = ReactRedux
  const { addTodo } = Actions

  let AddTodo = ({ dispatch }) => {
    let input

    return (
      <div>
        <input ref={node => {
          input = node
        }} onKeyPress={(e) => {
          console.log(e)
          if (e.key === 'Enter') {
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }} />
        <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          Add Todo
        </button>
      </div>
    )
  }
  AddTodo = connect()(AddTodo)

  return AddTodo
})
