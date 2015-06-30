const React = require( "react" );
const NavigationPane = require ( "./NavigationPane" );
const Direction = require( "./infrastructure/Direction" );
class YearlyNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
  }
  onNavigate( direction ) {
    let dyear = direction === Direction.Left ? -1 : 1;
    this.props.setYear( this.props.navigationDate.getFullYear() + dyear );
  }
  getTitle() {
    return this.props.navigationDate.getFullYear();
  }
  render() {
    return <NavigationPane {...this.props} title={ this.getTitle() } onNavigate={ this.onNavigate }/>;
  }
}

export default YearlyNavigation;
