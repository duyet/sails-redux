define(['react', 'app/Rest'], function(React, Rest) {
  const { PropTypes, Component } = React

  class Home extends Component {
    componentDidMount() {
      const categogry = this.props.fetchCategory
    }

    render() {
      return <h1>Medica Home</h1>;
    }
  }

  Home.propTypes = {
  }

  return Home
})
