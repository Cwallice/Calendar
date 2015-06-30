const React = require( "react" );
const Direction = require( "./infrastructure/Direction.js" );


class NavButton extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick() {
    this.props.onNavigate( this.props.direction );
  }
  render() {
      return <span onClick={ this.onClick }>{ this.props.direction === Direction.Left ? "Left" : "Right" }
              </span>;
  }
}

class NavigationPane extends React.Component{
  render() {
    return <div>
              <NavButton {...this.props} direction={ Direction.Left } on/>
              { this.props.title }
              <NavButton {...this.props} direction={ Direction.Right }/>
            </div>;
  }
}

export default NavigationPane;
