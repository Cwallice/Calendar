const React = require( "react" );

class DayCell extends React.Component{
  render(){
    return <div>
            { this.props.date.getDate() }
          </div>;
  }
}

export default DayCell;
