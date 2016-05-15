define([
  'react',
  'react-router',
  '../containers/Header',
  './Footer',
  './NotFound',
  '../containers/Home',
  '../containers/Explore',
  '../containers/Topics',
  '../containers/Auth',
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
  Auth,
  VisibleTodoList
) {
  const { Router, Route, IndexRoute, browserHistory } = ReactRouter
  const App = () => (
    <div className='wrapper-page'>
      <Header />

      <Router history={browserHistory}>
        <IndexRoute component={Home} />
        <Route path='/' component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/topics' component={Topics} />
        <Route path='/auth*' component={Auth} />
        <Route path='*' component={NotFound} />
      </Router>

      <Footer />
    </div>
  )

  return App
})
