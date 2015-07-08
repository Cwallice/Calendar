import React from "react";
import NavigationPane from "./NavigationPane";
import Direction from "./infrastructure/Direction";
import Modes from "./infrastructure/Modes";
import NavigationKeyCodes from "./infrastructure/KeyCodes";

class YearsRangeNavigation extends React.Component{
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
      case 13: this.props.drillDown( Modes.Yearly, this.props.timeframe );
      break;
      case 37: this.addYear( -1 );
      break;
      case 38: this.addYear( -4 );
      break;
      case 39: this.addYear( 1 );
      break;
      case 40: this.addYear( 4 );
      break;
    }
  }
  addYear( year ){
    var newDate = new Date( +this.props.selectedDate );
    newDate.setFullYear( newDate.getFullYear() + year );
    this.props.setDate( newDate, Modes.Years );
  }
  onNavigate( direction ) {
    let drange = direction === Direction.Left ? -1 : 1;
    var newtimeframe = new Date( +this.props.timeframe );
    newtimeframe.setFullYear( newtimeframe.getFullYear() + drange*16 );
    this.props.setTimeframe( newtimeframe );
  }
  getTitle() {
    let start = ( ( this.props.timeframe.getFullYear()/16 )|0 ) * 16;
    return start + " - " + ( start + 16 );
  }
  render() {
    return <NavigationPane {...this.props}
                            title={ this.getTitle() }
                            nextMode={ Modes.Monthly }
                            onNavigate={ this.onNavigate }/>;
  }
}

export default YearsRangeNavigation;
