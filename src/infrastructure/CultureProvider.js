const weekDaysNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

class CultureProvider {
  constructor( locale="en-us", format="dd/mm/yyyy" ){
    this.locale = locale;
    this.format = format;
  }
  getWeekDaysNames() {
      return weekDaysNames;
  }
  getMonthNames() {
      return monthNames;
  }
  monthName( month ) {
      return monthNames[ month ];
  }
  dayName( day ) {
      return weekDaysNames[ day ];
  }
  isHoliday( day ) {
     return day % 6 === 0 || day % 7 ===0;
  }
  static splitDate( date ){
    return {
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getYear()
    };
  }
  format( date ){ //format ) {
    var sdate = CultureProvider.splitDate( date );
    //format = format || this.format;
    var formattedValue = [];
    formattedValue.push( ( "0" + sdate.month ).slice( -2 ) );
    formattedValue.push( ( "0" + sdate.month ).slice( -2 ) );
    formattedValue.push( ( "0000" + sdate.month ).slice( -4 ) );
    return formattedValue.join( "/" );
  }
}

export default CultureProvider;
