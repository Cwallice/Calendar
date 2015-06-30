const React = require( "react" );
const NavigationPane = require ( "./NavigationPane" );
const Direction = require( "./infrastructure/Direction" );
class YearsRangeNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
  }
  onNavigate( direction ) {
    let dyear = direction === Direction.Left ? -1 : 1;
    this.props.setRangeIndex( this.props.rangeIndex + dyear );
  }
  getTitle() {
    return this.props.rangeIndex * 16 + " - " + this.props.rangeIndex * 16 + 16;
  }
  render() {
    return <NavigationPane {...this.props} title={ this.getTitle() } onNavigate={ this.onNavigate }/>;
  }
}

export default YearsRangeNavigation;
