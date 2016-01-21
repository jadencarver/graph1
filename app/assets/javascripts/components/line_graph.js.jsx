var LineGraph = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function() {
    var bars = this.props.data.map(function(e,i) {
      return (
        <g>
          <rect x="2" y={i*25+2} width={e * 50} height="20" fill="black" />
          <rect x="0" y={i*25} width={e * 50} height="20" fill="red" />
          <text x="5" y={i*25+15} fill="#FFFFFF">{e}</text>
        </g>
      )
    })
    return (
      <svg>
        {bars}
      </svg>
    );
  }
});
