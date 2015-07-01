const React = require( "react" );
const NavigationPane = require ( "./NavigationPane" );
const Direction = require( "./infrastructure/Direction" );
const Modes = require( "./infrastructure/Modes" );

class YearsRangeNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
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
