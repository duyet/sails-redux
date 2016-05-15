define([
  'react',
  'react-router',
  '../containers/Header',
  './Footer',
  './NotFound',
  '../containers/Home',
  '../containers/Explore',
  '../containers/Topics',
  '../containers/Auth'
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
  Auth
) {
  const { Component, PropTypes } = React
  const { Router, Route, IndexRoute, browserHistory } = ReactRouter

  class App extends Component {

    render () {
      return (
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
    }
  }

  App.propTypes = {
    store: PropTypes.object
  }

  return App
})
