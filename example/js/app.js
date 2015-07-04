const React = require( "react" );
const DatePicker = require( "../../src/DatePicker" ).DatePicker;

class DatePickerInput extends React.Component{
  constructor( props ) {
    super( props );
    this.onDateChange = this.onDateChange.bind( this );
    this.state = {
      formattedDate: "",
      visible: false
    };
    this.onClick = this.onClick.bind( this );
    this.onHide = this.onHide.bind( this );
  }
  onClick() {
    this.setState( { visible: true } );
  }
  onDateChange( date, formattedDate ) {
    this.setState( { date: date, formattedDate: formattedDate } );
  }
  onHide(){
    this.setState( { visible: false } );
  }
  render() {
    return <div>
              <input type="text"
                    value={ this.state.formattedDate }
                    onClick={ this.onClick } onTouchStart={ this.onClick }/>
              <DatePicker onDateChange={ this.onDateChange }
                          onHide = { this.onHide }
                          visible={ this.state.visible }/>
          </div>;
  }
}

React.render( <DatePickerInput/> , document.getElementById( "datepicker" ) );
