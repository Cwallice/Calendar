const React = require( "react" );

class DayCell extends React.Component{
  render(){
    return <div>
            { this.props.day }
          </div>;
  }
}

export default DayCell;
