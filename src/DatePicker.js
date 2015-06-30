const React = require( "react" );
const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );
const YearlyNavigation = require( "./YearlyNavigation" );
const MonthlyNavigation = require( "./MonthlyNavigation" );
const YearsRangeNavigation = require( "./YearsRangeNavigation" );

const CultureProvider = require( "./infrastructure/CultureProvider" );
const Modes = require( "./infrastructure/Modes" );

const MainPaneModeViews = {};

MainPaneModeViews[ Modes.Yearly ] = YearlyPane;
MainPaneModeViews[ Modes.Monthly ] = MonthlyPane;
MainPaneModeViews[ Modes.Years ] = YearsRangePane;


const NavigationModeViews = {};
NavigationModeViews[ Modes.Yearly ] = YearlyNavigation;
NavigationModeViews[ Modes.Monthly ] = MonthlyNavigation;
NavigationModeViews[ Modes.Years ] = YearsRangeNavigation;

class SwitchView extends React.Component{
  render() {
    let component = this.props.cases[ this.props.mode ];
    return React.createElement( component, this.props );
  }
}

class DatePicker extends React.Component{
  constructor( props ) {
    super( props );
    this.state =  {
      date: this.props.date || new Date(),
      mode: Modes.Years,
      inFocus: false,
      navigationDate: new Date()
    };
    this.onFocus = this.onFocus.bind( this );
  }
  onFocus() {
    this.setState( { visible: true } );
  }
  render() {
    return <div>
              <input type="text" onFocus={ this.onFocus }/>
              <SwitchView {...this.props}
                          mode={ this.state.mode }
                          cases={ NavigationModeViews }/>
              <SwitchView {...this.props}
                          mode={ this.state.mode }
                          date={ this.state.date }
                          visible={ !!this.state.inFocus }
                          cases ={  MainPaneModeViews }/>
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
