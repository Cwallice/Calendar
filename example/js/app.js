const React = require( "react" );
const DatePicker = require( "../../src/DatePicker" ).DatePicker;
function onDateChange( date ){
  console.log( date );
}
React.render( <DatePicker onDateChange={ onDateChange }/>, document.getElementById( "datepicker" ) );
