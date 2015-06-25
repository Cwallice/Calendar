const React = require( "react" );

class MonthCell extends React.Component{
  _onClick() {
    this.props.onSelect( this.props.month );
  }
  render() {
    return <div>
            { this.props.cultureProvider.monthNameShort( this.props.month ) }
          </div>;
  }
}

MonthCell.propTypes = {
  month: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func
};

export default MonthCell;
