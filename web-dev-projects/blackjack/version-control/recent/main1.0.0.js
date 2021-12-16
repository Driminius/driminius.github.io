
    var playerHand = [];
    var dealerHand = [];
    var container = document.getElementById('cont');
    var hand = document.getElementById('hnd');
    var board = document.getElementById('brd');
    var dealerHandVal = document.getElementById('dealerHandValue');
    var winnerCaption = document.getElementById('whoWinsCaption');
    var playerValue = 0;
    var dealerValue = 0;
    var flagAce = false;
    var flagAceComputer = false;
    
    var deckId;
    let request = new XMLHttpRequest();
        request.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=4', true);
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                //https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
                var data = JSON.parse(this.response);
                console.log(data);
                deckId = data.deck_id;    
                console.log('were in')
                drawnCards = data.cards;
                //console.log(drawnCards);
                playerHand.push(drawnCards[0]);
                playerHand.push(drawnCards[2]);
                dealerHand.push(drawnCards[1]);
                const img = document.createElement('img');
                 img.src = dealerHand[0].image;
                const div = document.createElement('div');
                div.setAttribute('class' ,'card');
                div.appendChild(img);
                board.appendChild(div);
                dealerHand.push(drawnCards[3]);

                const img2 = document.createElement('img');
                img2.src = './assets/PNG/Cards/cardBack_blue1.png';
                const div2 = document.createElement('div');
                div2.setAttribute('class', 'card toBeFlipped');
                div2.appendChild(img2);
                board.appendChild(div2);
               
               playerHand.forEach ( (card) => {
                   const imag = document.createElement('img');
                   imag.src = card.image;

                   const myDiv = document.createElement('div');
                   myDiv.setAttribute('class', 'card');
                   myDiv.appendChild(imag);
                   hand.appendChild(myDiv);
                   console.log('before the check: ' + card.value);

                   if (card.value == 'ACE') {
                    flagAce = true;
                    console.log("ace detected");
                    }
                  else if ( (card.value == 'KING')  || (card.value == 'QUEEN') || (card.value == 'JACK') ) {
                       console.log('setting value to 10');
                       console.log('parsing: ' + card.value);
                       playerValue += 10;
                   } else {
                       
                    playerValue += parseInt(card.value);
                
                   }
                   console.log(playerValue);
                   var elem = document.getElementById('handValue');
                   elem.innerText = playerValue;
               })
            
               // check if any player wins from the first draw
                console.log(playerHand);
                
                //check value

                    
            } else {
                console.log('no access to api');
            }
        }

        request.send();



        // hit me function!
        /*
        
        add card to player's hand
        check the value of the array
        if > 21 you lose!
        */
        var btnBet = document.getElementById('betMe');
        var btnStand = document.getElementById('standMe');
        var btnHit = document.getElementById('hitMe');
        btnHit.addEventListener('click', () => {
            console.log('deck id is: ' + deckId);
            let request = new XMLHttpRequest();
            request.open('GET', 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=1', true);
            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                var data = JSON.parse(this.response);
                console.log(data);
                playerHand.push(data.cards[0]);

                    const imag = document.createElement('img');
                   imag.src = data.cards[0].image;

                   const myDiv = document.createElement('div');
                   myDiv.setAttribute('class', 'card');
                   myDiv.appendChild(imag);
                   hand.appendChild(myDiv);

                   // check hand
                   checkHand(playerHand);
                  
                } else {
                    console.log('no access to api');
                }
            }
    
            request.send();
            
        });

        function checkHand (takeHandArray) {
            let handValue = 0;
            takeHandArray.forEach( (card) => {
                console.log(card.value);

                if (card.value == 'ACE') {
                    flagAce = true;
                    console.log("ace detected");
                }
                 else if ( (card.value == 'KING')  || (card.value == 'QUEEN') || (card.value == 'JACK') ) {
                    console.log('setting value to 10');
                    console.log('parsing: ' + card.value);
                    handValue += 10;
                    
                } else {
                var elem = document.getElementById('handValue');
                 handValue += parseInt(card.value);
                 elem.innerText = handValue;
                 
                }
                console.log(handValue);
                playerValue = handValue;
                if ( handValue > 21) {
                    console.log("busteD!!");
                    var elem = document.querySelector('.choices');
                    elem.style.display = 'none';
                    gameoverscreen();
                }
            })

        }

        /* function to handle stand */
        btnStand.addEventListener('click', () => {
            // if ace flag == true add 1
            // check whether the value goes over 21 for 11 if true 
            // then set the value to 1

            var elem = document.querySelector('.choices');
            elem.style.display = 'none';

            console.log( playerHand );
            // also check how many aces are there
            if ( flagAce == true) {
                //check how many aces are there
                // then looop thru it
                console.log('handle function: ' + playerValue);
                if ( playerValue + 11 < 21) {
                    
                    let a = playerValue + 11;
                    let b = playerValue + 1;
                    if ( a > b ) {
                        playerValue = a;
                    } else {
                        playerValue = b;
                    }
                     

                    var elem = document.getElementById('handValue');
                    console.log('ace in the hole: ' + playerValue);
                    elem.innerText = playerValue;
                    
                } else {
                    playerValue += 1
                    var elem = document.getElementById('handValue');
                    elem.innerText = playerValue;
                    
                }
            }
            // algorithm to handle AI behavior
            // call function to handle AI behavior
            var ele = document.querySelector('.toBeFlipped');
            //ele.style.display = 'none';
            ele.remove();
            handleAi(dealerHand);
        })

        function handleAi( myArray ) {
            let count = 0;
            console.log("computer's hand:" + myArray);
            const img = document.createElement('img');
            img.src = myArray[1].image;
            const div = document.createElement('div');
            div.setAttribute('class', 'card');
            div.appendChild(img);
            board.appendChild(div);
            myArray.forEach( (card) => {
                console.log(card);
                if ( (card.value == 'KING')  || (card.value == 'QUEEN') || (card.value == 'JACK') ) {
                    console.log('setting value to 10');
                    console.log('parsing: ' + card.value);
                    dealerValue += 10;
                } else {
                    
                 dealerValue += parseInt(card.value);
                }
            });
            dealerHandVal.innerText = dealerValue;
            
            if ( dealerValue >= 17 ) {
                compareResults();
                return;
            }
            
            console.log(' in the ai function before API request')
                
            var req2 = new XMLHttpRequest();
            req2.open('GET', 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=1', true);
            req2.onreadystatechange = function () {
                if (req2.readyState === XMLHttpRequest.DONE && req2.status === 200) {
                    var data = JSON.parse(this.response);

                    console.log('in the AI function');
                    console.log(data);
                    dealerHand.push(data.cards[0]);
                    const imag = document.createElement('img');
                    imag.src = data.cards[0].image;
        
                    const myDiv = document.createElement('div');
                    myDiv.setAttribute('class', 'card');
                    myDiv.appendChild(imag);
                    board.appendChild(myDiv);
        
                    dealerValue += parseInt(data.cards.value);
                        
                } else {
                    console.log('ai couldnt access api');
                }
                
            }  
            req2.send(); 
            compareResults();
        }

        function compareResults() {
            if ( playerValue >= dealerValue ) {
                console.log('you win the round!');
                winnerCaption.innerText = 'You win!';
                gameoverscreen();
            } else  {
                console.log('computer wins!');
                winnerCaption.innerText = 'Computer Wins!';
                gameoverscreen();
            }
        }

        function gameoverscreen() {
            var elem = document.querySelector('.gameover');
            elem.style.display = "block";
            //var audioElem = new Audio('./assets/sfx/you-lose.mp3');
           // audioElem.play();
        }