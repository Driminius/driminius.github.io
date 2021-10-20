 /*
            Very important note here; the data being received is using a GET method from
            an html form; DO NOT use this method for private information such as passwords,
            social security, or anything private.
            In this case; I used the GET method to create a mockup of a UI experience for a 
			streaming service passing the id of a movie thru the URL from the fan-made studio ghibli
			api https://ghibliapi.herokuapp.com/.

			https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
        */

		//document.getElementById("write").innerHTML = window.location.search; 
		// tokenize the GET url received  and convert toString()
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());

		var movieId = params.value.toString();
		var gal;
		var sliderMovies = [];

		const app = document.getElementById('root');
		//console.log(app);
		const logo = document.createElement('img');
		logo.src = "https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";
		const home = document.createElement('a');
		home.setAttribute('href', './index.html');
		home.appendChild(logo);
		const container = document.createElement('div');
		container.setAttribute('class', 'container');
		
		var li1 = document.getElementById('li-one');
		var li2 = document.getElementById('li-two');
		var li3 = document.getElementById('li-three');

		var navbar = document.getElementById('nvbar');
		var elem = document.getElementById('home-icon');
		elem.appendChild(home);
		//navbar.appendChild(home);
		//li1.innerHTML = '<a href="">Home</a>';
		//li2.innerHTML = '<a href="">Home</a>';
		//li3.innerHTML = '<a href="">Home</a>';

		//app.appendChild(logo);
		
		//app.appendChild(home);
		app.appendChild(container);
		var req = new XMLHttpRequest();
		req.open( 'GET', 'https://ghibliapi.herokuapp.com/films/' + movieId, true );

		//console.log(req);

		req.onload = function() {
			
			var movie = JSON.parse(this.response); 
			console.log(movie);
			if (req.status >= 200 && req.status < 400 ) {
			
				var elem = document.getElementById("movie-name");
				elem.innerHTML = movie.title;
				const imag = document.createElement('img');
				imag.src = movie.movie_banner;	// or movie.image
				imag.setAttribute('class', 'movieHeader');
				
				const card = document.createElement('div');
				card.setAttribute('class', 'card');
				//card.setAttribute('id', 'cardId' + count);
				card.setAttribute('id', movie.id);
				card.setAttribute('onclick', 'DisplayInfo(this.id)' );
				const h1 = document.createElement('h1');
				h1.textContent = `${movie.title}`;
				h1.innerHTML = h1.textContent.toUpperCase();
				const h3 = document.createElement('h3');
				h3.textContent = 'Directed by ' + `${movie.director}`;
				const producer = document.createElement('h4');
				producer.textContent = 'Produced by ' + `${movie.producer}`;
				const releasedate = document.createElement('p');
				releasedate.textContent = `${movie.release_date}` + ' ' + `${movie.running_time}` +"minutes";

				const button = document.createElement('button');
				button.setAttribute('class', 'personButton');
				button.setAttribute('id', 'myBtn');
				button.setAttribute('onclick', 'displayCharacters()');
				button.textContent = "More info!";

				const p = document.createElement('p');
				//movie.description = movie.description.substring(0, 300);
				p.textContent = `${movie.description}`;

				container.appendChild(imag);
				//container.appendChild(h1); 
				container.appendChild(card);
				//card.appendChild(imag);
				card.appendChild(h1);
				card.appendChild(releasedate);
				card.appendChild(p);
				card.appendChild(h3);
				card.appendChild(producer);

		
			
				const extras = document.createElement('div');
				extras.setAttribute('class', 'extras');
				extras.innerHTML = "<h1>Similar Movies</h2>";
				
				// add a scroll feature and append these childs
				var request = new XMLHttpRequest();
        		request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
        		request.onload = function () {

					// Begin accessing JSON data here
					var data = JSON.parse(this.response);
				
				
					// create the list and button
						const contGallery = document.createElement('div');
						contGallery.setAttribute('class', 'container-gallery');
						const leftBtn = document.createElement('button');
						leftBtn.setAttribute('type', 'button');
						leftBtn.setAttribute('class', 'leftBtn');
						leftBtn.setAttribute('style', 'left:0; z-index:49;');
						leftBtn.setAttribute('onclick', 'leftShift()');
						leftBtn.textContent = '❮'
						contGallery.appendChild(leftBtn);
						//container.appendChild(contGallery);

						var cont = document.querySelector('.container-gallery');
    					
						
						const gallery = document.createElement('div');
						gallery.setAttribute('class', 'gallery');
						gallery.setAttribute('id', 'galId');
						//gallery.appendChild(leftBtn);
						contGallery.appendChild(gallery);
						console.log(gallery);
						gal = document.getElementById('galId');

					/* iterate thru an array with a fixed size */
					for (var i = 0; i < 10; i++) {
						console.log(data[i].title);
						const img = document.createElement("img");
						img.src = data[i].image;
						img.style.width="20%";
						if ( i == 0 ) {
							img.setAttribute('id', 'firstSlide');
						}

						if ( i == 9 ) {
							img.setAttribute('id', 'lastSlide');
						}
						//card.appendChild(img);
						sliderMovies.push({
							"title" : data[i].title,
							"movieimage" : data[i].image,
						});
						gallery.appendChild(img);
						
					
					}
					const rightBtn = document.createElement('button');
					rightBtn.setAttribute('type', 'button');
					rightBtn.setAttribute('class', 'rightBtn');
					rightBtn.setAttribute('style', 'right:0; z-index:50;');
					rightBtn.setAttribute('onclick', 'rightShift()');
					rightBtn.textContent = '❯'
					contGallery.appendChild(rightBtn);
					//gallery.appendChild(rightBtn);
					app.appendChild(contGallery);

					if (request.status >= 200 && request.status < 400) {
						data.forEach(movie => {
						
						//const img = document.createElement("img");
						//img.src = movie.image;
						//img.style.width="20%";
						//card.appendChild(img);
						//const h1 = document.createElement('h1');
						//h1.textContent = movie.title;

						//console.log(movie.id);
						
						});
					} else {
						const errorMessage = document.createElement('marquee');
						errorMessage.textContent = `Gah, it's not working!`;
						app.appendChild(errorMessage);
					}
				}

        request.send();
				
				card.appendChild(extras);
				
			
			} else {
				console.log("error");
			}
		}
		req.send();
	


		//const elem = document.querySelector("#shift");
		document.addEventListener('readystatechange', function() { 
			if (document.readyState === "complete") { 
				
				console.log("hello");
				

    
			}
			
		});
		var counter = 0;
		var shiftValue = 0;
		function rightShift() {
			if (counter == 0) {
				return;
			}
			counter--;
			console.log(counter);
		var gal = document.getElementById('galId');
        shiftValue +=100;
        gal.style.transition = 'transform 0.4s ease-in-out';
        gal.style.transform  = 'translateX(' + shiftValue + 'px' + ')';
        // if overflow == true reset?
        console.log(cont.style.overflow);
        if (cont.style.overflow === 'hidden') {
            console.log('hello');
        }
    }

    function leftShift() {
		if (counter == 9) {
			return;
		}
		counter++;
		console.log(counter);
		var gal = document.getElementById('galId');
        shiftValue -=100;
		
        gal.style.transition = 'transform 0.4s ease-in-out';
        gal.style.transform  = 'translateX(' + shiftValue + 'px' + ')';
        // if overflow == true reset?
        console.log(cont.style.overflow);
        if (cont.style.overflow === 'hidden') {
            console.log('hello');
        }
    }
    
    