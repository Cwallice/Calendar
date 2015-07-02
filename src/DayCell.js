const React = require( "react" );

class DayCell extends React.Component{
  constructor( props ) {
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick(){
    this.props.setDate( this.props.date );
  }
  render(){
    return <div className="datepicker-day-cell" onClick={ this.onClick }>
            { this.props.date.getDate() }
          </div>;
  }
}

DayCell.propTypes = {
  date: React.PropTypes.object.isRequired,
  setDate: React.PropTypes.func.isRequired
};

export default DayCell;
