const weekDaysNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

class CultureProvider {
  constructor( locale="en-us", format="dd/mm/yyyy" ){
    this.locale = locale;
    this.format = format;
    this.weekDayStart = 0;
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
  monthNameShort( month ) {
      return this.monthName( month ).slice( 0, 3 );
  }
  dayName( day ) {
      return weekDaysNames[ day ];
  }
  dayNameShort( day ) {
      return this.dayName( day ).slice( 0, 2 );
  }
  isHoliday( date ) {
     return date.getDay() % 6 === 0 || date.getDay() % 7 ===0;
  }
  static splitDate( date ){
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }
  localize( key ) {
    return key;
  }
  formatted( date ){ //format ) {
    var sdate = CultureProvider.splitDate( date );
    //format = format || this.format;
    var formattedValue = [];
    formattedValue.push( ( "0" + ( sdate.month + 1 ) ).slice( -2 ) );
    formattedValue.push( ( "0" + sdate.day ).slice( -2 ) );
    formattedValue.push( ( "0000" + sdate.year ).slice( -4 ) );
    return formattedValue.join( "/" );
  }
}

export default CultureProvider;
