import React from "react";

class WeekHeaderCell extends React.Component{
  render(){
    return <div className="datepicker-weekheader-cell">{ this.props.weekday.toUpperCase() }</div>;
  }
}

export default WeekHeaderCell;
