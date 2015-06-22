const React = require( "react" );
const DAYS_BLOCK_COLUMNS = 7;


class MonthlyPaneCell extends React.Component{
  render() {
    return <td>
              <MonthCell/>
            </td>;
  }
}

class MonthlyPaneRow extends React.Component{
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

class MonthlyPane extends React.Component{
  buildRow = ()=>{
    return <MonthPaneRow/>
  }
  render() {
    let rows = new Array( 4 ).map( buildRow );
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default MonthPane;
