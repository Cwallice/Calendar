import React from  "react";
import Modes from  "./infrastructure/Modes";

class BottomNavigation extends React.Component{
  drillDown( timeframe ) {
    let newTimeframe = new Date( +timeframe );
    this.props.drillDown( Modes.Monthly, newTimeframe );
  }

  render(){
    return <div className="datepicker-nav-bottom">
              <span onClick={ this.drillDown.bind( this, this.props.selectedDate ) }>
                { this.props.cultureProvider.localize( "Selected" ) }
              </span>
              <span onClick={ this.drillDown.bind( this, new Date() ) }>
                { this.props.cultureProvider.localize( "Today" ) }
              </span>
          </div>;
  }
}

export default BottomNavigation;
