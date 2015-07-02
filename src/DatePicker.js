const React = require( "react" );
const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );
const YearlyNavigation = require( "./YearlyNavigation" );
const MonthlyNavigation = require( "./MonthlyNavigation" );
const YearsRangeNavigation = require( "./YearsRangeNavigation" );

const CultureProvider = require( "./infrastructure/CultureProvider" );
const Modes = require( "./infrastructure/Modes" );

const ModeViews = {};

ModeViews[ Modes.Yearly ] = [ YearlyNavigation, YearlyPane ];
ModeViews[ Modes.Monthly ] = [ MonthlyNavigation, MonthlyPane ];
ModeViews[ Modes.Years ] = [ YearsRangeNavigation, YearsRangePane ];



class ContentPane extends React.Component{
  render() {
    let components = this.props.cases[ this.props.mode ].map(
          (c, i) => React.createElement( c, Object.assign( {}, this.props, { key: "c"+ i + this.props.mode } ) )
    );
    return <div className="datepicker-pane">
              { components }
          </div>;
  }
}

class DatePicker extends React.Component{
  constructor( props ) {
    super( props );
    this.state =  {
      selectedDate: this.props.date || new Date(),
      timeframe: new Date(),
      mode: this.props.mode || Modes.Monthly,
      inFocus: false
    };
    this.onFocus = this.onFocus.bind( this );
    this.switchMode = this.switchMode.bind( this );
    this.setTimeframe = this.setTimeframe.bind( this );
    this.setDate = this.setDate.bind( this );
    this.drillDown = this.drillDown.bind( this );
  }
  onFocus() {
    this.setState( { visible: true } );
  }
  setTimeframe( newDate ) {
    this.setState( { timeframe: newDate } );
  }
  switchMode( mode ) {
    this.setState( { mode: mode } );
  }
  setDate( date ){
    this.setState( { timeframe: new Date( +date ), mode: Modes.Monthly, selectedDate: date } );
    this.props.onDateChange( date );
  }
  drillDown( mode, timeframe ){
    this.setState( { mode: mode, timeframe: timeframe } );
  }
  render() {
    return <div>
              <input type="text" onFocus={ this.onFocus }/>
              <ContentPane {...this.props}
                          mode={ this.state.mode }
                          timeframe = { this.state.timeframe }
                          selectedDate={ this.state.selectedDate }
                          cases={ ModeViews }
                          setTimeframe={ this.setTimeframe }
                          setDate={ this.setDate }
                          drillDown={ this.drillDown }
                          switchMode ={ this.switchMode }/>
          </div>;
  }
}

DatePicker.defaultProps = {
  cultureProvider: new CultureProvider(),
};

module.exports= {
  DatePicker: DatePicker,
  CultureProvider: CultureProvider
};
