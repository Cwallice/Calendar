const React = require( "react" );
const YearlyPane = require( "./YearlyPane" );
const MonthlyPane = require( "./MonthlyPane" );
const YearsRangePane = require( "./YearsRangePane" );
const CultureProvider = require( "./infrastructure/CultureProvider" );

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

    return <YearsRangePane {...this.props}/>;
  }
}

class DatePicker extends React.Component{
  constructor( props ) {
    super( props );
    this.state =  {
      date: this.props.date || new Date(),
      mode: Modes.years,
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
              <PaneSwitch mode={ this.state.mode }
                          date={ this.state.date }
                          visible={ !!this.state.inFocus }
                          {...this.props}/>
          </div>;
  }
}

DatePicker.defaultProps = {
  cultureProvider: new CultureProvider(),
  year: new Date().getFullYear(),
  month: new Date().getMonth()
};

module.exports= {
  DatePicker: DatePicker,
  CultureProvider: CultureProvider
};
