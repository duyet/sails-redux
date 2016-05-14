define(['react', 'app/Rest', 'app/Store'], function(React, Rest, Store) {
  const { PropTypes, Component } = React

  class Home extends Component {
    componentDidMount() {

    }

    render() {
      return <h1>Medica Home</h1>;
    }
  }

  Home.propTypes = {
  }

  return Home
})
