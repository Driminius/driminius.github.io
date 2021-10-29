 /*
            find a way to get latitude and longitude of a location; set the values into the api 
            return the results and make the necessary changes to display information

        */

            const app = document.getElementById('root');
		
            const container = document.createElement('div');
            container.setAttribute('class', 'container');
    
            //app.appendChild(logo);
        
            app.appendChild(container);
            const h1 = document.createElement('h1');
            h1.innerText = "7 Day Forecast";
            container.appendChild(h1);
    
        
            /*
                Author: AD
                Date: 10/27/2021
                Function: filterDate(myDateStr)
                Purpose: This function filters the date from
                the 7Timer! API into a nicer format;
                example output:
                September 23 2021
            */
            function filterDate(myDateStr) {
                var myD = "";
                // [0][1][2][3]
                var month ="";
                month += myDateStr[4];
                month += myDateStr[5];
                console.log("this month is " + month);
                if ( month == '01') {
                    myD = 'January ';
                } else if ( month == '02' ) {
                    myD = 'February ';
                } else if ( month == '03' ) {
                    myD = 'March ';
                } else if ( month == '04' ) {
                    myD = 'April ';
                } else if ( month == '05' ) {
                    myD = 'May ';
                } else if ( month == '06' ) {
                    myD = 'June ';
                } else if ( month == '07' ) {
                    myD = 'July ';
                } else if ( month == '08' ) {
                    myD = 'August ';
                } else if ( month == '09' ) {
                    myD = 'September ';
                } else if ( month == '10' ) {
                    myD = 'October ';
                } else if ( month == '11' ) {
                    myD = 'November ';
                } else if ( month == '12' ) {
                    myD = 'December ';
                } else {
                    return;
                }
                // if day contains a '0' do not append else append
                if ( myDateStr[6] == '0') {
    
                } else {
                    myD += myDateStr[6];
                }
                
                myD += myDateStr[7] + ', ';
                myD += ' ' + myDateStr[0] + myDateStr[1] + myDateStr[2] + myDateStr[3];
                return myD.toString();
            }
    
            /*
                Author: AD
                Date: 10/27/2021
                Function: getWeatherIcon(wewatherDesc)
                Purpose: This function filters the date from
                the 7Timer! API into a nicer format;
                return:
                returns pathway to img icon;
            */
            function getWeatherIcon(weatherDesc) {
                var weather = weatherDesc;
                if ( weather == 'mcloudy' || weather == 'pcloudy' ) {
                    return "./img/icons/1530391_clouds_sun_sunny_weather.png";
                } else if (weather == 'clear') {
                    return "./img/icons/1530392_weather_sun_sunny_temperature.png";
                } else if ( weather == 'cloudy' ) {
                    return "./img/icons/1530369_cloudy_weather_clouds_cloud.png";
                } else if (weather == 'rain') {
                    return "./img/icons/1530364_rain_storm_shower_weather.png";
                } else if ( weather =='lightrain' || weather == 'oshower') {
                    return "./img/icons/1530365_rain_cloud_drizzel_weather.png";
                }
            }
    
            function getForecast( latitude, longitude ) {
                var req = new XMLHttpRequest();
                req.open( 'GET', 'http://www.7timer.info/bin/api.pl?lon=' + (longitude) + '&lat=' + latitude + '&product=civillight&output=json', true );
    
                req.onload = function() {
                    
                    // so JSON can return an OBJECT or an ARRAY
                    var data = JSON.parse(this.response); 
                    console.log("Hayward, California 7 Day Forecast");
                    //console.log(data);
                    //var arr;
                    // console.log((JSON.stringify(data)));
                    console.log(data);
                    if (req.status >= 200 && req.status < 400 ) {
                
                        // forEach only works on arrays!!
                        data.dataseries.forEach( (day) => {
                            // build the cards in here
                            console.log(day.date);
                            console.log(day.weather);
                            const card = document.createElement('div');
                            card.setAttribute('class', 'card');
                            const h3 = document.createElement('h3');
                            
                            // filter the date to read as MONTH DAY YEAR 
                            h3.innerText = filterDate(day.date.toString());
                            card.appendChild(h3);
    
                            // 
                            const img = document.createElement('img');
                            img.src = getWeatherIcon(day.weather.toString());
                            img.style.width = "20%";
                            card.appendChild(img);
                            const h4 = document.createElement('h4');
                            h4.innerText = day.weather.toString();
                            card.appendChild(h4);
                            const p2 = document.createElement('p');
                            p2.innerText = "temp2m: " + day.temp2m.max.toString();
                            card.appendChild(p2);
                            const p3 = document.createElement('p');
                            p3.innerText = "temp2m: " + day.temp2m.min.toString();
                            card.appendChild(p3);
                            const p = document.createElement('p');
                            p.innerText = "Wind10m_max:" + day.wind10m_max;
                            card.appendChild(p);
                            // getWeatherIcon(day.weather)
                            // img.src = getWeatherIcon(day.weather);
    
                            // finally append card to container
                            container.appendChild(card);
                        })
    
                        } else {
                            console.log("error");
                        }
                    }
                    req.send();
                }
    
        /*
        This implementation of getting a user's latitude and longitude was taken from W3 Schools
        which is an implmenetation of HTML's geolocation. The browser should ask the user if they want
        to give their location to the browser. If the user accepts, the lat and lon values are returned 
        and the program continues; else the program ends and nothing is reported.
        */
        var x = document.getElementById("demo");
        
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }
        
        function showPosition(position) {
          x.innerHTML = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
          // call my function to output the weather from here.
    
            // get 7 day forecast
             getForecast( position.coords.latitude.toString(), position.coords.longitude.toString() )
        }
    
        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
                case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
                case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
                case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
            }
        }