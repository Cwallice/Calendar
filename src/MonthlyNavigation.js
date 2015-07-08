import React from "react";
import NavigationPane from "./NavigationPane";
import Direction from "./infrastructure/Direction";
import Modes from "./infrastructure/Modes";

class MonthlyNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
  }
  onNavigate( direction ) {
    let dmonth = direction === Direction.Left ? -1 : 1;
    let newtimeframe = new Date( +this.props.timeframe );
    newtimeframe.setMonth( newtimeframe.getMonth() + dmonth );
    this.props.setTimeframe( newtimeframe );
  }
  getTitle() {
    return this.props.cultureProvider.monthName( this.props.timeframe.getMonth() ) + " " +  this.props.timeframe.getFullYear();
  }
  render() {
    return <NavigationPane {...this.props}
                            nextMode = { Modes.Yearly }
                            title={ this.getTitle() }
                            onNavigate={ this.onNavigate }/>;
  }
}

export default MonthlyNavigation;
