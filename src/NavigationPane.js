const React = require( "react" );
const Direction = require( "./infrastructure/Direction.js" );
const cn = require( "classnames" );

class NavButton extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick() {
    this.props.onNavigate( this.props.direction );
  }
  render() {
      return <span
                  className={ cn( "datepicker-nav-button", {
                    "arrow-left": this.props.direction === Direction.Left,
                    "arrow-right": this.props.direction === Direction.Right
                  } ) } onClick={ this.onClick }></span>;
  }
}

class NavigationPane extends React.Component{
  constructor( props ){
    super( props );
    this.onSwitchMode = this.onSwitchMode.bind( this );
  }
  onSwitchMode() {
    this.props.switchMode( this.props.nextMode );
  }
  render() {
    return <div className="datepicker-nav-pane">
              <NavButton {...this.props} direction={ Direction.Left } on/>
              <span className="datepicker-nav-title" onClick={ this.onSwitchMode }>{ this.props.title }</span>
              <NavButton {...this.props} direction={ Direction.Right }/>
            </div>;
  }
}

export default NavigationPane;
