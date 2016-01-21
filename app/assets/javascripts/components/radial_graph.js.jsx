var RadialGraph = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function() {
    var sum = this.props.data.reduce(function(a, b) { return a + b })
    var offset = 0;
    var circumference = 2*Math.PI*40;
    var dials = this.props.data.map(function(e,i) {
      var colors = ['#000000', '#FF0000', '#00FF00', '#0000FF']
      var arc = circumference*(e/sum)
      var dashArray = [0, offset, arc, 999].join(' ')
      offset += arc
      return (
        <g>
          <circle r="40" cx="60" cy="60" fill="none" stroke={colors[i%colors.length]} strokeWidth="30" strokeDasharray={dashArray} />
        </g>
      )
    })
    return (
      <svg>{dials}</svg>
    );
  }
});
