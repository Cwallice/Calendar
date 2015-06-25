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

class YearsPane extends React.Component {
  render() {
    let rows = [];

    let fromYear = ( (this.props.year/YEARS_BLOCK_SIZE)|0 ) * YEARS_BLOCK_SIZE;
    for( let row=0; row<YEARS_BLOCK_SIDE; row++ ){
      rows.push( <tr>
                    <YearsPaneRow key={ row } fromYear={ fromYear + YEARS_BLOCK_SIDE * row } {...this.props}/>
                </tr> );
    }
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearsPane;
