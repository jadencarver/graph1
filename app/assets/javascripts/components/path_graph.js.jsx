var PathGraph = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function() {
    var pathInfo = ['M', 0, 0]
    this.props.data.map(function(e,i) {
      pathInfo.push(i === 0 ? "M" : "L")
      pathInfo.push(i*30)
      pathInfo.push(e*10)
    })
    return (
      <svg>
        <path d={pathInfo.join(' ')} stroke="#000000" strokeWidth="3" fill="none" />
      </svg>
    );
  }
});
