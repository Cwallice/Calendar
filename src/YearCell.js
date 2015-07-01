const React = require( "react" );
const Modes = require( "./infrastructure/Modes" );

class YearCell extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick() {
    var timeframe = new Date( +this.props.timeframe );
    timeframe.setFullYear( this.props.year );
    this.props.drillDown( Modes.Yearly, timeframe );
  }
  render (){
    return <div onClick={ this.onClick }>
              { this.props.year }
          </div>;
  }
}

YearCell.propTypes = {
    year: React.PropTypes.number.isRequired
};

export default YearCell;
