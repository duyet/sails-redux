define(['react', '../Actions'], function (React, Actions) {
  var { PropTypes } = React

  const Todo = ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {text}
    </li>
  )

  Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  return Todo
})
