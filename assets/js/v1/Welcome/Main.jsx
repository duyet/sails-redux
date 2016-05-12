define(['react', './ToDoList', './ToDoForm'], function(React, ToDoList, ToDoForm) {

  var Header = React.createClass({
    getInitialState: function() {
      return {todos: this.props.todos || []};
    },
    render: () => {
      return (
        <div>
          <h1>Todo List</h1>
          <ToDoList data={todos} />
          <ToDoForm />
        </div>
      );
    }
  });

  return Header;
});
