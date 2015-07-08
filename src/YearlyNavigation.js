import React from "react";
import NavigationPane from "./NavigationPane";
import Direction from "./infrastructure/Direction";
import Modes from "./infrastructure/Modes";
import NavigationKeyCodes from "./infrastructure/KeyCodes";

class YearlyNavigation extends React.Component{
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
      case 13: this.props.drillDown( Modes.Monthly, this.props.timeframe );
      break;
      case 37: this.addMonth( -1 );
      break;
      case 38: this.addMonth( -3 );
      break;
      case 39: this.addMonth( 1 );
      break;
      case 40: this.addMonth( 3 );
      break;
    }
  }
  addMonth( month ){
    var newDate = new Date( +this.props.selectedDate );
    newDate.setMonth( this.props.selectedDate.getMonth() + month );
    this.props.setDate( newDate, Modes.Yearly );
  }
  onNavigate( direction ) {
    let dyear = direction === Direction.Left ? -1 : 1;
    let newtimeframe = new Date( +this.props.timeframe );
    newtimeframe.setFullYear( newtimeframe.getFullYear() + dyear );
    this.props.setTimeframe( newtimeframe );
  }
  getTitle() {
    return this.props.timeframe.getFullYear();
  }
  render() {
    return <NavigationPane {...this.props}
                           nextMode={ Modes.Years }
                           title={ this.getTitle() }
                           onNavigate={ this.onNavigate }/>;
  }
}

export default YearlyNavigation;
