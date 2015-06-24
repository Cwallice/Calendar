const React = require( "react" );

class WeekHeaderCell extends React.Component{
  render(){
    return <div> { this.props.weekday } </div>;
  }
}

export default WeekHeaderCell;
