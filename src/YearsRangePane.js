const React = require( "react" );
const YearCell = require( "./YearCell" );
const YEARS_BLOCK_SIZE = 6;

class YearsPaneCell extends React.Component{
  render() {
    return <td>
              <YearCell onSelect={ this.props.onSelect } year={ this.year }/>
            </td>;
  }
}

class YearsPaneRow extends React.Component{
    buildCell( c, i ){
      return <YearsPaneCell year={ this.props.from + i + 1 }/>;
    }
    render() {
      let cells = new Array( YEARS_BLOCK_SIZE ).map( this.buildCell );
      return <tr>
                { cells }
            </tr>;
    }
}

class YearsPane extends React.Component {
  buildRow( e, i ) {
    return <tr>
              <YearsPaneRow from={ this.props.from }/>
          </tr>;
  }
  render() {
    let rows = new Array( YEARS_BLOCK_SIZE ).map( this.buildRow );
    return <div>
              <table>
                { rows }
              </table>
          </div>;
  }
}

export default YearsPane;
