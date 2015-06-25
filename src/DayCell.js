const React = require( "react" );

class DayCell extends React.Component{
  render(){
    return <div>
            { this.props.date.getDate() }
          </div>;
  }
}

DayCell.propTypes = {
  date: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func
};
export default DayCell;
