const React = require( "react" );
const DayCell = require( "./DayCell" );
const WeekHeaderCell = require ( "./WeekHeaderCell" );
const DAYS_BLOCK_COLUMNS = 7;
const DAYS_BLOCK_ROWS = 6;


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
              <DayCell date={ this.props.date }/>;
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
      cells.push( <MonthlyPaneCell key={ col } {...this.props}/> );
    }
    return <tr>
              { cells }
            </tr>;
  }
}

class MonthlyPane extends React.Component{
  constructor( props ) {
      super( props );
  }

  render() {
    var rows = [];
    for( let row=0; row<DAYS_BLOCK_ROWS; row++ ){
      rows.push( <MonthlyPaneRow key={ row } 
                                 {...this.props}
                                 fromDate={ this.nextDate( row ) }/> );
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
