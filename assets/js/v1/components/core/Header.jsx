define(['react'], function(React) {

  var Header = React.createClass({
    getInitialState: function() {
      return {data: this.props.data};
    },
    render: function() {
      var title = this.props.title || '';
      var textLink = { color: '#FFF' };
      return (
        <div className="header-container container">
          <h1 style={{ color: '#FFF' }}>{title}</h1>
          <h3>
            <a href="http://duyetdev.com" style={textLink}>@duyetdev</a> | 
            <a href="https://github.com/duyetdev/sails-react" style={textLink}>Source code</a>
          </h3>
        </div>
      );
    }
  }); 

  return Header;
}); 