// Author: Adrian Domingo
/*
Purpose: To filter out a calendar, all written in javascript.
*/

// Declare Globals
//                  0       1      2       3      4       5     6
let daysOfWeek2 = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
//                  0             1       2         3       4       5       6       7         8             9         10          11
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfMonthArrva = [];



// monthIndex is based on 0....11
// January, .... , December

// returns number of days in a month, with a given year
// starting from 0, ... , 11
// January, ... December
function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

// returns the day of the week, from 0, 1, 2, 3, 4, 5, 6
// sun, mon, tues, wed, thurs, fri, sat
// from a given month in a given year
function firstDay(month, year) {
  return new Date(year,month).getDay();
}


// for day
// indexing must start at 1 and end lessthan or equal, 1 <= myDate

console.log("*************");
console.log("**************");

// fill array with dayValue, dayName,
// for months in a thisYear
  // for days in months fill array\

// fill an array with 365 days of the year for a given year
// not including leap year
// if leap year, you must add an extra day to February, February 29th
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function fillYear( ) {
  // load up some html code here to get the data from client
  var year = document.getElementById("year");
  year = parseInt(year.value);

  // declare an array to hold the values;
  var arrayCal = [];

  // fillcounterMonths represents months
  var fillCounterMonths = 0;
  for ( i = 0; i <= 11; i++ ) {
    var numDays = daysInMonth(fillCounterMonths, year);
    
    var firstDayNum = firstDay(fillCounterMonths, year);
    // increment the array by holding values of day, day starts at 1
    for (j = 1; j <= numDays; j++ ) {
      // reset the values because we have to keep track if
      if ( firstDayNum == 7 ) {
        firstDayNum = 0;
      }

      // ****** logic is correct but you need to define the array outside first.

        // you can declare even if month#2 == 0
        var even = true;
        if ( ((i+1) % 2) == 0) {
            console.log("true!");
            even = true;
        } else {
            even = false;
        }
      arrayCal.push({
          day: j,
          dayOfWeek: daysOfWeek2[firstDayNum],
          month: i,
          isOdd: even
      });

      firstDayNum++;
    }
    //console.log(arrayCal);
    console.log("******** end of month");
    numDays = 0; // reset the value
    firstDayNum = -1; // reset the value

    fillCounterMonths++; // increment to the next month\

  }

var filterMon = document.getElementById("calendarFilterID"); // body of the calendar
filterMon.appendChild(document.createElement("h1"));
filterMon.appendChild(document.createTextNode(year));
var linebreak = document.createElement('br');
  filterMon.appendChild(linebreak);


  // invoke the filter here
  filter( arrayCal );
}

// Should I store all this data in an array?
// get a day and which iteration you want to display
// and take in an array to check
// I want 3rd sundays of the year
function filter( arrayCal ) {
  
  let day = document.getElementById("weekday");
  day = parseInt(day.value);
  console.log("value of day is " + day );
  day = daysOfWeek2[day];
  let iteration = document.getElementById("weekdayiteration")
  iteration = parseInt(iteration.value);
  console.log("value of iteration is " + iteration );

  var filterMon = document.getElementById("calendarFilterID"); // body of the calendar

  var dayTracker = 0;
  var monthTracker = 0; // Represent January
  var flag = true;
  //monthTracker = arrayCal[0].month; // set the value to january
  //var filteredDays = document.createElement('h1');
  filterMon.appendChild(document.createTextNode("The filtered days of the year are: "));

  var linebreak = document.createElement('br');
  filterMon.appendChild(linebreak);
  for ( i = 0; i < arrayCal.length - 1; i++) {

    // check if month value has changed if so turn flag to changed
     if ( arrayCal[i].month != monthTracker ){
      //change flag

      flag = true;
      dayTracker = 0;
      monthTracker = arrayCal[i].month; // monthTracker is now equal to current month
     }

    // find the selected day, now increment the tracker
    // check flag if month is done
    if ( arrayCal[i].dayOfWeek == day) {
      dayTracker++;
      // if the dayTracker is equal to the iteration; i.e. 3rd week and month changed
      if ( dayTracker == iteration && flag == true) {
      
        //set flag to false
        console.log("FOUND the " + iteration + " " + arrayCal[i].dayOfWeek);
        console.log(arrayCal[i].dayOfWeek + " " + arrayCal[i].day + " " + monthArray[arrayCal[i].month] + arrayCal[i].isOdd );

        // add all of these to a child of <p>
        
        filterMon.appendChild(document.createTextNode( arrayCal[i].dayOfWeek + " " + monthArray[arrayCal[i].month] + " " + arrayCal[i].day ) );

        var linebreak = document.createElement('br');
        filterMon.appendChild(linebreak);

        flag = false;
      }
    }
  }
  var horizonbreak = document.createElement('hr');
  filterMon.appendChild(horizonbreak);
}

// just clear the content now
function clearYear() {
  var filterMon = document.getElementById("calendarFilterID"); // body of the calendar
  filterMon.innerHTML = "";
}


//filter( "Fri", 5, daysOfMonthArrva);
