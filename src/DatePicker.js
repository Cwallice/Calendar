const React = require( "react" );
const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );
const YearlyNavigation = require( "./YearlyNavigation" );
const MonthlyNavigation = require( "./MonthlyNavigation" );
const YearsRangeNavigation = require( "./YearsRangeNavigation" );
const BottomNavigation = require( "./BottomNavigation" );
const CultureProvider = require( "./infrastructure/CultureProvider" );
const Modes = require( "./infrastructure/Modes" );

const ModeViews = {};

ModeViews[ Modes.Yearly ] = [ YearlyNavigation, YearlyPane, BottomNavigation ];
ModeViews[ Modes.Monthly ] = [ MonthlyNavigation, MonthlyPane, BottomNavigation ];
ModeViews[ Modes.Years ] = [ YearsRangeNavigation, YearsRangePane, BottomNavigation ];



class ContentPane extends React.Component{
  render() {
    let components = this.props.cases[ this.props.mode ].map(
          (c, i) => React.createElement( c, Object.assign( {}, this.props, { key: "c" + i + this.props.mode } ) )
    );
    return <div className="datepicker-pane">
              { components }
          </div>;
  }
}

function trimDate( date ){
  var splitted = CultureProvider.splitDate( date );
  return new Date( splitted.year, splitted.month, splitted.day );
}


class DatePicker extends React.Component{
  constructor( props ) {
    super( props );
    this.switchMode = this.switchMode.bind( this );
    this.setTimeframe = this.setTimeframe.bind( this );
    this.setDate = this.setDate.bind( this );
    this.drillDown = this.drillDown.bind( this );
    this._trackOutsideClick = this._trackOutsideClick.bind( this );
    this._handleCloseKey = this._handleCloseKey.bind( this );
    this.state = this.initState( this.props );
  }
  initState( props ){
    return  {
      selectedDate: trimDate( props.selectedDate || ( this.state && this.state.selectedDate ) || new Date() ),
      timeframe: ( this.state && this.state.timeframe ) || trimDate( new Date() ),
      mode: props.mode || Modes.Monthly,
    };
  }
  setTimeframe( newDate ) {
    newDate = trimDate( newDate );
    this.setState( { timeframe: newDate } );
  }
  switchMode( mode ) {
    this.setState( { mode: mode } );
  }
  setDate( date ){
    date = trimDate( date );
    this.setState( { timeframe: date , mode: Modes.Monthly, selectedDate: date }, function(){
      this.props.onDateChange( date, this.props.cultureProvider.formatted( date ) );
    }.bind( this ) );
  }
  drillDown( mode, timeframe ){
    this.setState( { mode: mode, timeframe: trimDate( timeframe ) } );
  }
  /*private sections*/
  _trackOutsideClick( e ) {
    if ( !this.props.visible ){
      return;
    }
    let target = e.target;
    let root = React.findDOMNode( this );
    while( target ){
      if( target === root ){
          return;
      }
      target = target.parentElement;
    }
    this.props.onHide();
  }
  _handleCloseKey( e ){
    if ( e.keyCode===27 ){
      this.props.onHide();
    }
  }
  componentWillReceiveProps( newProps ){
    this.setState( this.initState( newProps ) );
  }
  componentDidMount(){
    document.addEventListener( "mousedown", this._trackOutsideClick );
    document.addEventListener( "touchstart", this._trackOutsideClick );
    document.addEventListener( "keydown", this._handleCloseKey );
  }
  componentWillUnmount() {
    document.removeEventListener( "mousedown", this._trackOutsideClick );
    document.removeEventListener( "touchstart", this._trackOutsideClick );
    document.addEventListener( "keydown", this._handleCloseKey );

  }
  render() {
    if( !this.props.visible ){
      return null;
    }
    return <ContentPane {...this.props}
              mode={ this.state.mode }
              timeframe = { this.state.timeframe }
              selectedDate={ this.state.selectedDate }
              cases={ ModeViews }
              setTimeframe={ this.setTimeframe }
              setDate={ this.setDate }
              drillDown={ this.drillDown }
              switchMode ={ this.switchMode }/>;
  }
}

DatePicker.defaultProps = {
  cultureProvider: new CultureProvider(),
  alwaysVisible: false,
  visible: false,
  onHide: function(){}
};

module.exports= {
  DatePicker: DatePicker,
  CultureProvider: CultureProvider
};
