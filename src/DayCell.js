import React from "react";
import cn from "classnames";
let today = new Date();
today = new Date( today.getFullYear(), today.getMonth(), today.getDate() );

class DayCell extends React.Component{
  constructor( props ) {
    super( props );
    this.onClick = this.onClick.bind( this );
  }
  isSelected() {
    return +this.props.date === +this.props.selectedDate;
  }
  isToday() {
    return  +this.props.date === +today;
  }
  offTimeframe() {
    return this.props.date.getMonth() !== this.props.timeframe.getMonth();
  }
  onClick(){
    this.props.setDate( this.props.date );
  }
  render(){
    return <div className={ cn( "datepicker-date-cell", {
                              "datepicker-today": !this.isSelected() && this.isToday(),
                              "datepicker-selected": this.isSelected(),
                              "datepicker-weekend": this.props.cultureProvider.isHoliday( this.props.date ),
                              "datepicker-timeframe-off": this.offTimeframe()
                            } ) } onClick={ this.onClick }>
            { this.props.date.getDate() }
          </div>;
  }
}

DayCell.propTypes = {
  date: React.PropTypes.object.isRequired,
  setDate: React.PropTypes.func.isRequired
};

export default DayCell;
