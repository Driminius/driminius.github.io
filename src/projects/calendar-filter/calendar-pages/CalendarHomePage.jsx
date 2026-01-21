import { useState } from "react";

const CalendarHomePage = () => {
  const [selectYear, setSelectYear] = useState("2025");
  const [weekdayNumFormat, setweekdayNumFormat] = useState(0); // 0 to 6
  const [weekdayIteration, setweekdayIteration] = useState(1); // 1 to 5

  /* declare GLOBALS objects */
  const daysOfWeek2_conv = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const monthArray_conv = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* this doesn't have to be done, the native javascript Date object already handles LeapYear */
  const leapYear_conv = (year) => {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  };

  const daysInMonth_conv = (month, year) => {
    return 32 - new Date(year, month, 32).getDate();
  };

  const firstDay_conv = (month, year) => {
    return new Date(year, month).getDay();
  };
  /* fill year */
  const fillYear = (e) => {
    e.preventDefault();
    // load up some html code here to get the data from client
    //var year = document.getElementById("year");
    //let year = userYear.current;

    let year = selectYear;
    console.log("the value of year: selectYear state object is" + year);
    year = parseInt(year);
    console.log("the year is from fillYear()" + year);
    // declare an array to hold the values;
    var arrayCal = [];

    // fillcounterMonths represents months
    var fillCounterMonths = 0;
    for (let i = 0; i <= 11; i++) {
      // get number of days in month per year
      var numDays = daysInMonth_conv(fillCounterMonths, year);

      var firstDayNum = firstDay_conv(fillCounterMonths, year);

      // increment the array by holding values of day, day starts at 1
      for (let j = 1; j <= numDays; j++) {
        // reset the values because we have to keep track if
        if (firstDayNum == 7) {
          firstDayNum = 0;
        }

        // ****** logic is correct but you need to define the array outside first.

        // you can declare even if month#2 == 0
        var even = true;
        if ((i + 1) % 2 == 0) {
          console.log("true!");
          even = true;
        } else {
          even = false;
        }
        arrayCal.push({
          day: j,
          dayOfWeek: daysOfWeek2_conv[firstDayNum],
          month: i,
          isOdd: even,
        });

        firstDayNum++;
      }
      //console.log(arrayCal);
      console.log("******** end of month");
      numDays = 0; // reset the value
      firstDayNum = -1; // reset the value

      fillCounterMonths++; // increment to the next month\
    }
    //console.log(arrayCal);

    var filterMon = document.getElementById("calendarFilterID"); // body of the calendar
    filterMon.appendChild(document.createElement("h1"));
    filterMon.appendChild(document.createTextNode(year));
    var linebreak = document.createElement("br");
    filterMon.appendChild(linebreak);

    // invoke the filter here
    filter(arrayCal);
  };

  /* filter the year */
  function filter(arrayCal) {
    //let day = document.getElementById("weekday");
    //day = parseInt(day.value);
    let day = weekdayNumFormat;
    console.log("value of day is " + day);
    day = daysOfWeek2_conv[day];
    // let iteration = document.getElementById("weekdayiteration");
    let iteration = weekdayIteration;
    iteration = parseInt(iteration);
    console.log("value of iteration is " + iteration);

    var filterMon = document.getElementById("calendarFilterID"); // body of the calendar

    var dayTracker = 0;
    var monthTracker = 0; // Represent January
    var flag = true;
    //monthTracker = arrayCal[0].month; // set the value to january
    //var filteredDays = document.createElement('h1');
    filterMon.appendChild(
      document.createTextNode("The filtered days of the year are: ")
    );

    var linebreak = document.createElement("br");
    filterMon.appendChild(linebreak);
    for (let i = 0; i < arrayCal.length - 1; i++) {
      // check if month value has changed if so turn flag to changed
      if (arrayCal[i].month != monthTracker) {
        //change flag

        flag = true;
        dayTracker = 0;
        monthTracker = arrayCal[i].month; // monthTracker is now equal to current month
      }

      // find the selected day, now increment the tracker
      // check flag if month is done
      if (arrayCal[i].dayOfWeek == day) {
        dayTracker++;
        // if the dayTracker is equal to the iteration; i.e. 3rd week and month changed
        if (dayTracker == iteration && flag == true) {
          //set flag to false
          console.log("FOUND the " + iteration + " " + arrayCal[i].dayOfWeek);
          console.log(
            arrayCal[i].dayOfWeek +
              " " +
              arrayCal[i].day +
              " " +
              monthArray_conv[arrayCal[i].month] +
              arrayCal[i].isOdd
          );

          // add all of these to a child of <p>

          filterMon.appendChild(
            document.createTextNode(
              arrayCal[i].dayOfWeek +
                " " +
                monthArray_conv[arrayCal[i].month] +
                " " +
                arrayCal[i].day
            )
          );

          var linebreak = document.createElement("br");
          filterMon.appendChild(linebreak);

          flag = false;
        }
      }
    }
    var horizonbreak = document.createElement("hr");
    filterMon.appendChild(horizonbreak);
  }

  /* Clear the data */
  const clearYear = (e) => {
    e.preventDefault();
    console.log("hello!");
    setSelectYear("2025");
    setweekdayNumFormat(0);
    setweekdayIteration(1);

    var container = document.getElementById("calendarFilterID");
    container.innerHTML = "";
  };

  return (
    <>
      <div className="md:ml-20 md:mr-20 rounded p-6">
        <h1 className="">Calendar Filter</h1>
        <p className="">
          Welcome to Calendar Filter, in this program you will be able to filter
          out a calendar for select days.
        </p>
        <hr className="my-4" />

        <br />

        <form className="bg-gray-200 p-6">
          <div className="md:grid md:grid-cols-3">
            <div>
              <label className="" htmlFor="selected-year">
                Select a year
              </label>
              <select
                className="bg-white rounded w-40"
                name="selectedYear"
                id="selected-year"
                value={selectYear}
                onChange={(e) => setSelectYear(e.target.value)}
              >
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>

                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
                <option value="2034">2034</option>
                <option value="2035">2035</option>
              </select>
            </div>
            <div>
              <label className="lead mr-2 ml-2" htmlFor="weekday">
                Select day:{" "}
              </label>
              <select
                className="bg-white rounded w-40"
                name="selectedWeekday"
                id="weekday"
                value={weekdayNumFormat}
                onChange={(e) => setweekdayNumFormat(e.target.value)}
              >
                <option value="0">Sun</option>
                <option value="1">Mon</option>
                <option value="2">Tues</option>
                <option value="3">Wed</option>
                <option value="4">Thurs</option>
                <option value="5">Fri</option>
                <option value="6">Sat</option>
              </select>
            </div>

            <div>
              <label className="lead mr-2 ml-2" htmlFor="weekdayiteration">
                Select iteration:{" "}
              </label>
              <select
                className="bg-white rounded w-40"
                name="selectedWeekdayIteration"
                id="weekdayiteration"
                value={weekdayIteration}
                onChange={(e) => setweekdayIteration(e.target.value)}
              >
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="flex ">
            <button
              className="bg-green-400 rounded p-2 mx-2 my-2 cursor-pointer hover:bg-green-500"
              onClick={fillYear}
            >
              Filter me!
            </button>
            <br />
            <button
              className="bg-red-300 rounded p-2 mx-2 my-2  cursor-pointer hover:bg-red-400"
              onClick={clearYear}
            >
              Clear me!
            </button>
          </div>
        </form>

        <hr />

        <hr />

        <hr />

        <div className="lead col-sm-4 block m-auto" id="calendarFilterID">
          my row
        </div>

        <hr />
        <p>The selected year: {selectYear}</p>
        <p>The weekday selected is: {daysOfWeek2_conv[weekdayNumFormat]}</p>
        <p>The weekday iteration is: {weekdayIteration}</p>
      </div>
    </>
  );
};

export default CalendarHomePage;
