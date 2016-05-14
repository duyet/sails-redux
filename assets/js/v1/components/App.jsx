define([
  'react',
  'react-router',
  '../containers/Header',
  './Footer',
  './NotFound',
  '../containers/Home',
  '../containers/Explore',
  '../containers/Topics',
  '../containers/VisibleTodoList'
],
function (
  React,
  ReactRouter,
  Header,
  Footer,
  NotFound,
  Home,
  Explore,
  Topics,
  VisibleTodoList
) {
  const { Router, Route } = ReactRouter
  const App = () => (
    <div className='wrapper-page'>
      <Header />

      <div className='container content-page'>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/explore' component={Explore} />
          <Route path='/topics' component={Topics} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>

      <Footer />
    </div>
  )

  return App
})
