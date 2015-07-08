import React from "react";
import { Calendar } from "../../src/Calendar";

class DatePickerInput extends React.Component{
  constructor( props ) {
    super( props );
    this.onDateChange = this.onDateChange.bind( this );
    this.state = {
      formattedDate: "",
      visible: false
    };
    this.onClick = this.onClick.bind( this );
    this.onKeyDown = this.onKeyDown.bind( this );
    this.onHide = this.onHide.bind( this );
    this.onChange = this.onChange.bind( this );
  }
  onClick() {
    this.setState( { visible: !this.state.visible } );
  }
  onDateChange( date, formattedDate ) {
    this.setState( { date: date, formattedDate: formattedDate } );
  }
  onKeyDown( e ) {
    if( e.keyCode === 13 ){
      this.onClick();
    }
  }
  onChange( e ) {
    let date = new Date(  e.target.value  );
    date = isNaN( +date ) ? new Date() : date;
    this.setState( { date: date, formattedDate: e.target.value } );
  }
  onHide( e ){
    if( e && e.target === React.findDOMNode( this.refs.datepickerInput ) && e.keyCode!== 27 ){
      return;
    }
    this.setState( { visible: false } );
  }
  ensureMountElement() {
    if( this.mountElement ){
      return;
    }

    var mountElement = document.createElement( "div" );
    document.body.appendChild( mountElement );
    this.mountElement = mountElement;
  }
  renderCalendar(){
    this.ensureMountElement();
    let boundaries = React.findDOMNode( this.refs.datepickerInput ).getBoundingClientRect();
    let translate = "translateY(" + boundaries.bottom + "px)" + " translateX("+boundaries.left +"px)";
    React.render( <Calendar style={ {
                                          transform: translate,
                                          position: "absolute",
                                          top: 0,
                                          left: 0
                                      }
                                    }
                                    onDateChange={ this.onDateChange }
                                    onHide = { this.onHide }
                                    visible={ this.state.visible }
                                    selectedDate={ this.state.date }/>,
                                    this.mountElement);
  }
  disposeCalendar() {
    React.unmountComponentAtNode( this.mountElement );
    this.mountElement.parentNode.removeChild( this.mountElement );
  }
  componentDidMount() {
    React.findDOMNode( this.refs.datepickerInput ).focus();
    this.renderCalendar();
  }
  componentDidUpdate() {
    this.renderCalendar();
  }
  componentWillUnmount(){
    this.disposeCalendar();
  }
  render() {
    return <div className="datepickerInput">
              <input placeholder="Click or press enter"
                  ref="datepickerInput" type="text"
                  value={ this.state.formattedDate }
                  onKeyDown={ this.onKeyDown }
                  onChange={ this.onChange }
                  onClick={ this.onClick } /></div>;
  }
}

React.render(<DatePickerInput/>, document.getElementById( "datepicker" ) );
