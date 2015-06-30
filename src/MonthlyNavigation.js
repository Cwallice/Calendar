const React = require( "react" );
const NavigationPane = require ( "./NavigationPane" );
const Direction = require( "./infrastructure/Direction" );
class MonthlyNavigation extends React.Component{
  constructor( props ){
    super( props );
    this.onNavigate = this.onNavigate.bind( this );
  }
  onNavigate( direction ) {
    let dmonth = direction === Direction.Left ? -1 : 1;
    this.props.setMonth( this.props.navigationDate.getMonth() + dmonth );
  }
  getTitle() {
    return this.props.cultureProvider.monthName( this.props.month );
  }
  render() {
    return <NavigationPane {...this.props} title={ this.getTitle() } onNavigate={ this.onNavigate }/>;
  }
}

export default MonthlyNavigation;
