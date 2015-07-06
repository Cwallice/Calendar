const React = require( "react" );
const YearCell = require( "./YearCell" );
const YEARS_BLOCK_SIDE = 4;
const YEARS_BLOCK_SIZE = YEARS_BLOCK_SIDE * YEARS_BLOCK_SIDE;

class YearsPaneCell extends React.Component{
  render() {
    return <td>
              <YearCell {...this.props }/>
            </td>;
  }
}

class YearsPaneRow extends React.Component{
    render() {
      let cells = [];
      for( let col=0; col<YEARS_BLOCK_SIDE; col++ ){
        cells.push( <YearsPaneCell {...this.props}
                                   key={ this.props.fromYear + col }
                                   year={ this.props.fromYear + col }
                                    /> );
      }
      return <tr>
                { cells }
            </tr>;
    }
}

class YearsRangePane extends React.Component {
  render() {
    let rows = [];

    let fromYear = ( (this.props.timeframe.getFullYear()/YEARS_BLOCK_SIZE)|0 ) * YEARS_BLOCK_SIZE;
    for( let row=0; row<YEARS_BLOCK_SIDE; row++ ){
      rows.push( <YearsPaneRow  key={ row+"y" }
                                fromYear={ fromYear + YEARS_BLOCK_SIDE * row }
                                {...this.props}/> );
    }
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearsRangePane;
