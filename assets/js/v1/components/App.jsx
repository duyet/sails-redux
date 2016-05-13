define(['react', 'react-router', '../containers/Header', '../containers/AddTodo', '../containers/VisibleTodoList', './NotFound', './Footer'],
function (React, ReactRouter, Header, AddTodo, VisibleTodoList, NotFound, Footer) {
  const { Router, Route } = ReactRouter
  const App = () => (
    <div className='wrapper-page'>
      <Header />

      <div className='content-page'>
        <Router>
          <Route path='/' component={VisibleTodoList} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>

      <Footer />
    </div>
  )

  return App
})
