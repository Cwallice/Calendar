const React = require( "react" );

class YearCell extends React.Component{
  render (){
    return <div>
              { this.props.year }
          </div>;
  }
}

YearCell.propTypes = {
    year: React.PropTypes.number.isRequired,
    onSelect: React.PropTypes.func
};

export default YearCell;
