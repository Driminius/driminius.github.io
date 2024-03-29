const app = document.getElementById('root');
		//console.log(app);
		const logo = document.createElement('img');
		logo.src = "https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";
		logo.setAttribute('class','headerImg');

		const container = document.createElement('div');
		container.setAttribute('class', 'container');

		//app.appendChild(logo);
		//app.appendChild(container);


		const home = document.createElement('a');
		home.setAttribute('href', './index.html');
		home.appendChild(logo);
		

		var li1 = document.getElementById('li-one');
		var li2 = document.getElementById('li-two');
		var li3 = document.getElementById('li-three');

		var navbar = document.getElementById('nvbar');
		var elem = document.getElementById('home-icon');
		elem.appendChild(home);

		var header = document.getElementById('hero-landing');
		const img = document.createElement('img');
				
		header.appendChild(img);



		app.appendChild(container);

		var req = new XMLHttpRequest();
		req.open( 'GET', 'https://ghibliapi.herokuapp.com/films', true );

		//console.log(req);

		req.onload = function() {
			
			var data = JSON.parse(this.response); // this gives you an array with all the data per record, within the record look at the data fields
			//var data2 = data[2].species;
			//console.log(data2);

			//var myResponse = fetch(data2);
			//var myData =  JSON.parse(myResponse);

			var count = 0;

			//console.log(data);
			//console.log(myResponse);

			if (req.status >= 200 && req.status < 400 ) {
				data.forEach( (movie) =>  {

				const imag = document.createElement('img');
				imag.src = movie.image;	
				imag.style.width="50%";
				imag.style.display="block";
				imag.style.margin="auto";
			

				const card = document.createElement('div');
				card.setAttribute('class', 'card');
				//card.setAttribute('id', 'cardId' + count);
				card.setAttribute('id', movie.id);
				card.setAttribute('onclick', 'DisplayInfo(this.id)' );
				card.setAttribute('style', 'background-image:url(\''+ imag.src +'\')' );
				const h1 = document.createElement('h1');
				h1.textContent = movie.title;


				const form = document.createElement('form');
				form.setAttribute('action', './movie-page.html');
				form.setAttribute('method', 'get');
				const input2 = document.createElement('input');
				input2.setAttribute('type', 'text');
				input2.setAttribute('name', 'value');
				input2.setAttribute('value', movie.id);
				input2.setAttribute('style', 'display:none');
				const input1 = document.createElement('input');
				input1.setAttribute('type', 'submit');
				input1.setAttribute('value', '▶️');
				input1.setAttribute('class', 'playBtn');
				form.appendChild(input2);
				form.appendChild(input1);

				container.appendChild(card);
				//atag.appendChild(button);
				//card.appendChild(imag);
				card.appendChild(h1);
				//card.appendChild(p);
				//card.appendChild(atag);
				card.appendChild(form);
				//card.appendChild(atag);
				count++;
			})
			} else {
				console.log("error");
			}
		}
		req.send();

		// click on a card and display it's information
		function DisplayInfo(id) {
			var elem = document.getElementById(id);
		
			var req = new XMLHttpRequest();
			req.open( 'GET', 'https://ghibliapi.herokuapp.com/films/' + elem.id, true );
			req.onload = function() {
			
				var data = JSON.parse(this.response);

				//header.addEventListener("mouseenter", function ( event ) {
				//	console.log('hello');

				//});
				header.style.transition = 'all 3s';
				img.style.transition = 'all 3s';
				img.src = data.image;
				header.style.display = "block";
				
				//header.setAttribute('style', 'background-image:url(\''+ data.image +'\')' );
				
				console.log(data.image);
				// fetch an array of ppl; if empty say sorry
				if ( data.people.toString() == 'https://ghibliapi.herokuapp.com/people/' ) {
					console.log("sorry no characters reported from the /film/ endpoint");
					return;
				}
				data.people.forEach( (character) =>  {
					
					// after fetching an array of ppl; iterate thru the list by using the endpoint

					var req2 = new XMLHttpRequest();
					req2.open( 'GET', character.toString(), true );
					
					req2.onload = function() {
			
						var character = JSON.parse(this.response);
						if (req2.status >= 200 && req2.status < 400 ) {
							console.log(character.name);
							// create a lightbox effect to show the content

							
						} else {
							console.log("error!");
						}		
					};
					req2.send();
					
					//var char = JSON.parse(character);
				//fetch the movie
				/*
					if array has something store the endpoints (urls) call each url to display 
					that person
				*/
				});
			};
			req.send();

		}

		function displayCharacters() {
			
		}