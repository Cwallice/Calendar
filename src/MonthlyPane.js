import React from "react";
import DayCell from "./DayCell";
import WeekHeaderCell from "./WeekHeaderCell";
const DAYS_BLOCK_COLUMNS = 7;
const DAYS_BLOCK_ROWS = 6;
const DAY_TIMESPAN = 24 * 3600 * 1000;

class MonthlyPaneHeader extends React.Component{
  render() {
    let weekdays = [];
    for( let col=0; col<DAYS_BLOCK_COLUMNS; col++ ){
      weekdays.push( <th key={ col+"mh" }>
                      <WeekHeaderCell
                        weekday={ this.props.cultureProvider.dayNameShort( col ) }/>
                    </th> );
    }
    return <tr>
          { weekdays }
          </tr>;
  }
}

class MonthlyPaneCell extends React.Component{
  render() {
    return <td>
              <DayCell {...this.props} date={ this.props.date }/>
            </td>;
  }
}

class MonthlyPaneRow extends React.Component{
  constructor( props ) {
      super( props );
  }
  render() {
    var cells = [];
    for( let col=0; col<DAYS_BLOCK_COLUMNS; col++ ){
      cells.push( <MonthlyPaneCell
        {...this.props }
         key={ col + this.props.row * DAYS_BLOCK_COLUMNS }
         date={ new Date( +this.props.startDate + DAY_TIMESPAN * col )}/> );
    }
    return <tr>
              { cells }
            </tr>;
  }
}

class MonthlyPane extends React.Component{
  getStartDate(){
    let monthStart = new Date( this.props.timeframe.getFullYear(),
                               this.props.timeframe.getMonth() );
    let startDate=monthStart;
    let startdiff = monthStart.getDay() - this.props.cultureProvider.weekDayStart;

    if( startdiff>0 ){
      startDate = new Date( monthStart - DAY_TIMESPAN * startdiff );
    }
    return startDate;
  }
  render() {
    let rows = [];
    let startDate = this.getStartDate();
    for( let row=0; row<DAYS_BLOCK_ROWS; row++ ){
      rows.push( <MonthlyPaneRow
                    {...this.props}
                    key={ row }
                    row={ row }
                    startDate={ new Date( +startDate + DAY_TIMESPAN * row * DAYS_BLOCK_COLUMNS ) } /> );
    }
    return <div>
              <table>
                <MonthlyPaneHeader {...this.props}/>
                { rows }
              </table>
          </div>;
  }
}

export default MonthlyPane;
