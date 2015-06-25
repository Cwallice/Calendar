const React = require( "react" );
const DayCell = require( "./DayCell" );
const WeekHeaderCell = require ( "./WeekHeaderCell" );
const DAYS_BLOCK_COLUMNS = 7;
const DAYS_BLOCK_ROWS = 6;
//const DAYS_LIMIT = DAYS_BLOCK_ROWS * DAYS_BLOCK_COLUMNS;
const DAY_TIMESPAN = 24 * 3600 * 1000;

class MonthlyPaneHeader extends React.Component{
  render() {
    let weekdays = [];
    for( let col=0; col<DAYS_BLOCK_COLUMNS; col++ ){
      weekdays.push( <th>
                      <WeekHeaderCell
                        key={ col }
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
              <DayCell date={ this.props.date }/>
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
         key={ col + this.props.row * DAYS_BLOCK_COLUMNS }
         {...this.props}
         date={ new Date( +this.props.startDate + DAY_TIMESPAN * col )}/> );
    }
    return <tr>
              { cells }
            </tr>;
  }
}



// function getPrevMonth( date ){
//   if( date.getMonth() === 0 ){
//     return new Date( date.getFullYear() - 1, 12 );
//   }
//   return new Date( date.getFullYear(),  date.getMonth() - 1  );
// }
//
// function getNextMonth( date ){
//   if( date.getMonth() === 12 ){
//     return new Date( date.getFullYear() + 1, 0 );
//   }
//   return new Date( date.getFullYear(),  date.getMonth() + 1  );
// }

// function buildDatesRange( fromDate, toDate ){
//     let diff = toDate - fromDate;
//     let dates = [];
//     let date = fromDate|0;
//
//     while( diff>0 ){
//         dates.push( new Date( date + DAY_TIMESPAN ) );
//         diff-= DAY_TIMESPAN;
//     }
//     return dates;
// }

class MonthlyPane extends React.Component{
  getStartDate(){
    let monthStart = new Date( this.props.year, this.props.month );
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
                    key={ row }
                    row={ row }
                    {...this.props}
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
