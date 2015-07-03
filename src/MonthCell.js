const React = require( "react" );
const Modes = require( "./infrastructure/Modes" );
const cn = require( "classnames" );

class MonthCell extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick() {
    var timeframe = new Date( +this.props.timeframe );
    timeframe.setMonth( this.props.month );
    this.props.drillDown( Modes.Monthly, timeframe );
  }
  isSelected() {
    return this.props.month === this.props.selectedDate.getMonth() &&
     this.props.selectedDate.getFullYear() === this.props.timeframe.getFullYear();
  }
  render() {
    return <div onClick={ this.onClick } className={ cn( "datepicker-month-cell", {
                          "datepicker-selected": this.isSelected()
                } ) }>
                { this.props.cultureProvider.monthNameShort( this.props.month ) }
          </div>;
  }
}

MonthCell.propTypes = {
  month: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func
};

export default MonthCell;
