requirejs.config({
    paths: {
      'react': '../bower_components/react/react-with-addons',
      'redux': '../bower_components/redux/index',
      'react-redux': '../bower_components/react-redux/index',
      'redux-thunk': '../bower_components/redux-thunk/index',
      'redux-logger': '../bower_components/redux-logger/index',
      'react-router': '../bower_components/react-router/index',
      'redux-api': '../bower_components/redux-api/dist/redux-api.min',
      'reactdom': '../bower_components/react/react-dom',
      'jquery': '../bower_components/jquery/dist/jquery',
      'jquery.timeago': '../bower_components/jquery-timeago/jquery.timeago',
      'showdown': '../bower_components/showdown/compressed/Showdown',
      'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
      'jwt-decode': '../bower_components/jwt-decode/build/jwt-decode.min',
      
      'app': '/js',
      'lib': '../bower_components'
    },

    shim: {
      'jquery.timeago': ['jquery'],
      'bootstrap': ['jquery']
    },

    baseUrl: '/js'
})

require(['react', 'reactdom', 'react-redux', 'react-router', './Store', './Actions', './components/App'],
  function (React, ReactDOM, ReactRedux, ReactRouter, Store, Actions, App) {
    const { Provider } = ReactRedux
    const { Router, Route, browserHistory } = ReactRouter
    const { TOKEN_KEY, loginUserSuccess } = Actions

    let token = localStorage.getItem(TOKEN_KEY);
    if (token !== null) {
      store.dispatch(loginUserSuccess(token));
    }

    ReactDOM.render(
      <Provider store={Store}>
        <Router history={browserHistory}>
          <Route path='*' component={App} />
        </Router>
      </Provider>,
      document.getElementById('main')
    )

    // as soon as this file is loaded, connect automatically,
    // var socket = io.sails.connect();

    // Expose connected `socket` instance globally so that it's easy
    // to experiment with from the browser console while prototyping.
    // window.socket = socket;
})

require.onError = function (err) {
    let message = 'Something went wrong!'
    if (err.requireType === 'timeout') {
       message = 'Loading timeout, please refresh your webpage.'
    }

    let messageBlock = document.createElement('div')
    messageBlock.innerHTML = `<div style="height: 48px;text-align:center;position: fixed;top: 0;left: 0;right: 0;background: #ff9300;width: auto;color: #fff;line-height: 48px;">${message}</div>`

    document.body.appendChild(messageBlock)
    document.getElementsByClassName('loading')[0].innerHTML = ''

    throw err
};
