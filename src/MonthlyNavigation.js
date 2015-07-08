import React from "react";
import NavigationPane from "./NavigationPane";
import Direction from "./infrastructure/Direction";
import Modes from "./infrastructure/Modes";
import NavigationKeyCodes from "./infrastructure/KeyCodes";

class MonthlyNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
  }
  componentWillUnmount(){
    document.removeEventListener( "keydown", this.keyHandler );
  }
  componentDidMount(){
    document.addEventListener( "keydown",
                                this.keyHandler = ( e )=>{
                                      NavigationKeyCodes.indexOf( e.keyCode )>=0 && this.handleKeyNavigation( e.keyCode );
                                } );
  }
  handleKeyNavigation( keyCode ){
    switch( keyCode ){
      case 37: this.addDays( -1 );
      break;
      case 38: this.addDays( -7 );
      break;
      case 39: this.addDays( 1 );
      break;
      case 40: this.addDays( 7 );
      break;
    }
  }
  addDays( days ){
    var newDate = new Date( +this.props.selectedDate );
    newDate.setDate( this.props.selectedDate.getDate() + days );
    this.props.setDate( newDate );
  }
  onNavigate( direction ) {
    let newtimeframe = new Date( +this.props.timeframe );
    newtimeframe.setMonth( newtimeframe.getMonth() + ( direction === Direction.Left ? -1 : 1 ) );
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
