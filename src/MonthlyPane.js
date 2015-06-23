const React = require( "react" );
const DayCell = require( "./DayCell" );
const DAYS_BLOCK_COLUMNS = 7;
const DAYS_BLOCK_ROWS = 6;


class MonthlyPaneCell extends React.Component{
  render() {
    return <td>
              <DayCell/>;
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
      cells.push( <MonthlyPaneCell/> );
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
      rows.push( <MonthlyPaneRow/> );
    }
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default MonthlyPane;
