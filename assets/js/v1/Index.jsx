requirejs.config({
    paths: {
      'react': '/bower_components/react/react-with-addons',
      'redux': '/bower_components/redux/index',
      'react-redux': '/bower_components/react-redux/index',
      'react-thunk': '/bower_components/redux-thunk/index',
      'react-logger': '/bower_components/redux-logger/index',
      'reactdom': '/bower_components/react/react-dom',
      'jquery': '/bower_components/jquery/dist/jquery',
      'jquery.timeago': '/bower_components/jquery-timeago/jquery.timeago',
      'showdown': '/bower_components/showdown/compressed/Showdown',
      'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap',
      'app': '/js/v1',
      'lib': '/bower_components'
    },

    shim: {
      'jquery.timeago': ['jquery']
    }
});

require(['jquery', 'react', 'reactdom', 'react-redux', 'app/Stores', 'app/components/core/Header', 'app/components/App'],
  function ($, React, ReactDOM, ReactRedux, Stores, Header, App) {
  $(function whenDomIsReady () {
      const { Provider } = ReactRedux
      
      ReactDOM.render(
        <Header title='Sails + React' />,
        document.getElementById('header')
      )

      ReactDOM.render(
        <Provider store={Stores}>
          <App />
        </Provider>,
        document.getElementById('main')
      )

      // as soon as this file is loaded, connect automatically,
      // var socket = io.sails.connect();

      // Expose connected `socket` instance globally so that it's easy
      // to experiment with from the browser console while prototyping.
      // window.socket = socket;
  });
});