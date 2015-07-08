import React from "react";
import Modes from "./infrastructure/Modes";
import cn from "classnames";
class YearCell extends React.Component{
  constructor( props ){
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  onClick() {
    var timeframe = new Date( +this.props.timeframe );
    timeframe.setFullYear( this.props.year );
    this.props.drillDown( Modes.Yearly, timeframe );
  }
  isSelected() {
    return this.props.year === this.props.selectedDate.getFullYear();
  }
  render (){
    return <div className={ cn( "datepicker-year-cell", {
                  "datepicker-selected": this.isSelected()
                } ) }
               onClick={ this.onClick }>
              { this.props.year }
          </div>;
  }
}

YearCell.propTypes = {
    year: React.PropTypes.number.isRequired
};

export default YearCell;
