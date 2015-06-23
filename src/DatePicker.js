const React = require( "react" );


const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );

const Modes = {
  yearly: "yearly",
  monthly: "monthly",
  years: "yearsrange"
};

class PaneSwitch extends React.Component{
  render() {
    if( this.props.mode === Modes.yearly ){
      return <YearlyPane { ...this.props }/>;
    }

    if( this.props.mode === Modes.monthly ){
      return <MonthlyPane { ...this.props }/>;
    }

    return <YearsRangePane/>;
  }
}

class DatePicker extends React.Component{
  constructor( props ) {
    super( props );
    this.state =  {
      date: this.props.date || new Date(),
      mode: Modes.monthly,
      inFocus: false
    };
    this.onFocus = this.onFocus.bind( this );
  }
  onFocus() {
    this.setState( { visible: true } );
  }
  render() {
    return <div>
              <input type="text" onFocus={ this.onFocus }/>
              <PaneSwitch mode={ Modes.monthly } date={ this.state.date } visible={ !!this.state.inFocus }/>
          </div>;
  }
}

export default DatePicker;
