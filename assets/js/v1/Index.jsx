requirejs.config({
    paths: {
      'react': '/bower_components/react/react-with-addons',
      'redux': '/bower_components/redux/index',
      'react-redux': '/bower_components/react-redux/index',
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

require(['jquery', 'react', 'reactdom', 'redux', 'react-redux', 'app/Actions',
  'app/core/Header', 'app/components/App', 'app/Reducers'],
  function ($, React, ReactDOM, Redux, ReactRedux, Actions,
    Header, App, Reducers) {
  $(function whenDomIsReady () {
      const { createStore } = Redux
      const { Provider } = ReactRedux

      const SailApp = Reducers
      const { addTodo, completeTodo } = Actions


      const store = createStore(SailApp)
      let unsubscribe = store.subscribe(() =>
        console.log(">>> " + store.getState())
      )

      console.log(store.getState())
      store.dispatch(addTodo('Learn about actions'))
      console.log(store.getState())

      // Dispatch some actions
      store.dispatch(addTodo('Learn about actions'))
      store.dispatch(addTodo('Learn about reducers'))
      store.dispatch(addTodo('Learn about store'))
      store.dispatch(completeTodo(0))
      store.dispatch(completeTodo(1))

      // Stop listening to state updates
      unsubscribe()

      ReactDOM.render(
        <Header title='Sails + React' />,
        document.getElementById('header')
      )

      ReactDOM.render(
        <Provider store={store}>
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
