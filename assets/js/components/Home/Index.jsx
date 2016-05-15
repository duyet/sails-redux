define(['react', '../../Rest', '../../Store', './Banner', './BlockQuotes', './Sitemap'], 
function(React, Rest, Store, Banner, BlockQuotes, Sitemap) {
  const { PropTypes, Component } = React

  class Home extends Component {
    componentDidMount() {

    }

    render() {
      return (
        <div className='home'>
          <Banner />

          <div className='container'>
            <BlockQuotes />
            <Sitemap />
          </div>
          
        </div>

      );
    }
  }

  return Home
})
