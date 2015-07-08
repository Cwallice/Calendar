import React from "react";
import MonthCell from "./MonthCell";
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
                        key={ col+"m"+this.props.startMonth }
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
      rows.push( <YearlyPaneRow
                        {...this.props}
                        key={ row + "m" }
                        startMonth= { row * MONTH_BLOCK_COLUMNS }/>  );
    }
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearlyPane;
