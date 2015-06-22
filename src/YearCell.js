const React = require( "react" );

class YearCell extends React.Component{
  _onClick= ()=>{
    this.props.onSelect( this.props.year );
  }
  render (){
    return <div onClick={ this._onClick }>
              this.props.year
          </div>;
  }
}

YearCell.propTypes = {
    year: React.PropTypes.number,
    onSelect: React.PropTypes.func
};

export default YearCell;
