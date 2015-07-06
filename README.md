# React DatePicker

###Component properties:

React Datepicker is rather simple component with very humble API:

| Property        | Description
|-----------------|---------------------------------------------------------------------------------------------------|
| selectedDate    | date that will be highlighted as selected, set to Today by default, optional                      |
| cultureProvider | instance that matches CultureProvider interface, optional                                         |
| visible         | specifies visibility status, false by default                                                     |
| style           | html style attribute in JSON format                                                               |
| onDateChange    | handler that acquires data from widget upon selection: ( date, formattedDate ), optional          |
| onHide          | handler that tells when component is supposed to be closed, optional but highly recommended though|


###Appearance customization

Don't forget to copy styles from datepicker.scss to start your own experiments.


### CultureProvider
Is meant to be responsible for following behavior:
- setting start day of a week
- dates/text localization
- formatting date into text

Overriding this class will allow to use such wonderful utilities as moment js

###Road map for next release
- Provide bottom level components extensibility, so that you can override Day Cell, Month Cell and Year Cell completely
- Set limited amount of hooks/api endpoints for general component behavior that allows to control it from inside
- Provide possibility to navigate over datepicker via keyboard
