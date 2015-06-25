const React = require( "react" );
const MonthCell = require( "./MonthCell" );
const MONTH_BLOCK_COLUMNS = 3;
const MONTH_BLOCK_ROWS = 4;

class YearlyPaneCell extends React.Component{
  render() {
    return <td>
              <MonthCell { ...this.props }/>
            </td>;
  }
}

class YearlyPaneRow extends React.Component{
  buildCell() {
    return <YearlyPaneCell/>;
  }
  render() {
    let cells = [];
    for( let col=0; col<MONTH_BLOCK_COLUMNS; col++ ){
      cells.push( <YearlyPaneCell
                        key={ col }
                        {...this.props}
                        month= { this.props.startMonth + col }/> );
    }
    return <tr>
              { cells }
            </tr>;
  }
}

class YearlyPane extends React.Component{
  render() {
    let rows = [];
    for( let row=0; row<MONTH_BLOCK_ROWS; row++ ){
      rows.push( <tr>
                    <YearlyPaneRow
                        key={ row }
                        {...this.props}
                        startMonth= { row * MONTH_BLOCK_COLUMNS }/>
                  </tr> );
    }
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearlyPane;
