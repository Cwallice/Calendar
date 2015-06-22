const React = require( "react" );
const MONTH_BLOCK_COLUMNS = 3;
const MONTH_BLOCK_ROWS = 4;

class YearlyPaneCell extends React.Component{
  render() {
    return <td>
              <MonthCell/>
            </td>;
  }
}

class YearlyPaneRow extends React.Component{
  buildCell=()=>{
    return <MonthPaneCell/>
  }
  render() {
    let cells = new Array( MONTH_BLOCK_COLUMNS ).map( buildCell );
    return <tr>
              { cells }
            </tr>;
  }
}

class YearlyPane extends React.Component{
  buildRow = ()=>{
    return <MonthPaneRow/>
  }
  render() {
    let rows = new Array( MONTH_BLOCK_ROWS ).map( buildRow );
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearlyPane;
