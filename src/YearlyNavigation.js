const React = require( "react" );
const NavigationPane = require ( "./NavigationPane" );
const Direction = require( "./infrastructure/Direction" );
const Modes = require( "./infrastructure/Modes" );
class YearlyNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
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
