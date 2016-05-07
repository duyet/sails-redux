define(['react'], function(React) {

  var Header = React.createClass({
    getInitialState: function() {
      return {data: this.props.data};
    },
    render: function() {
      var title = this.props.title || '';
      return (
        <div className="header-container">
          <h1 id="main-title" className="container">{title}</h1>
        </div>
      );
    }
  }); 

  return Header;
}); 