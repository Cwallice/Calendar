const React = require( "react" );


const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );

const Modes = {
  yearly: "yearly",
  monthly: "monthly",
  weekly: "weekly"
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
      date: this.props.date,
      mode: Modes.weekly
    };
  }
  onFocus() {
    this.setState( { visible: true } );
  }
  render() {
    return <div>
              <input type="text" onFocus={ this.onFocus }/>
              <PaneSwitch mode={ Modes.weekly } date={ this.props.date } visible={ !!this.state.inFocus }/>
          </div>;
  }
}

export default DatePicker;
