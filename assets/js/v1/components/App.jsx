define(['react', '../containers/AddTodo', '../containers/VisibleTodoList', './Footer'],
function (React, AddTodo, VisibleTodoList, Footer) {
  const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )

  return App
})
