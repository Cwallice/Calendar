const React = require( "react" );

class MonthCell extends React.Component{
  _onClick=( e )=>{
    this.props.onSelect( this.props.month )
  }
  render() {
    return <div>
            { this.props.month }
          </div>
  }
}

MonthCell.propTypes = {
  month: React.PropTypes.number,
  onSelect: React.PropTypes.func
}
