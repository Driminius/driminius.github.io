
    var playerHand = [];
    var dealerHand = [];
    var discardPile = [];
    var container = document.getElementById('cont');
    var hand = document.getElementById('hnd');
    var board = document.getElementById('brd');
    var dealerHandVal = document.getElementById('dealerHandValue');
    var winnerCaption = document.getElementById('whoWinsCaption');
    var startGameBtn = document.getElementById('startBtn');
    var playerValue = 0;
    var dealerValue = 0;
    var flagAce = false;
    var flagAceComputer = false;
    var deckId;


    // start the game
    startGameBtn.addEventListener('click', () => {
        var startSceneHide = document.querySelector('.startscene');
        startSceneHide.style.display = 'none';

        let request = new XMLHttpRequest();
        request.open('GET', 'https://deckofcardsapi.com/api/deck/new/draw/?count=4', true);
        request.onreadystatechange = function () {
            var blackjack = false;
            let dealerAceFlag = false;
            let dealerHasTen = false;
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                //https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
                var data = JSON.parse(this.response);
                console.log(data);
                deckId = data.deck_id;    
                console.log('were in')
                drawnCards = data.cards;
              
                playerHand.push(drawnCards[0]);
                playerHand.push(drawnCards[2]);
                dealerHand.push(drawnCards[1]);
                if (dealerHand[0].value == 'ACE' || dealerHand[0].value == 10 || dealerHand[0].value == 'KING' || dealerHand[0].value == 'QUEEN' || dealerHand[0].value == 'JACK' ) {
                    dealerValue = 10;
                   // dealerHandVal.innerText = 10;
                    if ( dealerHand[0].value == 'ACE' ) {
                        dealerAceFlag = true;
                    }
                    dealerHasTen = true;
                } else {
                    dealerValue = dealerHand[0].value;
                    //dealerHandVal.innerText = parseInt(dealerValue);
                }
                const img = document.createElement('img');
                 img.src = dealerHand[0].image;
                const div = document.createElement('div');
                div.setAttribute('class' ,'card');
                div.appendChild(img);
                board.appendChild(div);
                dealerHand.push(drawnCards[3]);
                if ( dealerAceFlag ) {
                    if (dealerHand[1].value == 'KING' || dealerHand[1].value == 'QUEEN' || dealerHand[1].value == 'JACK' || dealerHand[1].value == 10 ) {
                        console.log('Dealer gets blackjack!');
                        dealerValue += 11;
                        //dealerHandVal.innerText = parseInt(dealerValue);
                        winnerCaption.innerText = 'Computer wins! BLACKJACK!';
                        gameoverscreen();
                        return;
                    }
                }

                if ( dealerHasTen ) {
                    if ( dealerHand[1].value == 'ACE') {
                        console.log('Dealer gets blackjack!');
                        dealerValue += 11;
                        //dealerHandVal.innerText = parseInt(dealerValue);
                        compareResults();
                        return;
                    }
                } 

                // put artwork for facedown card
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
                  else if ( (card.value == 'KING')  || (card.value == 'QUEEN') || (card.value == 'JACK') || (card.value == 10 ) ) {
                        if ( flagAce == true) {
                            blackjack = true;
                            console.log('blackjack!!');
                            compareResults();
                            return;
                        }
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


    });

    

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

        var playerHasNumAces = 0;
        function checkHand (takeHandArray) {
            let handValue = 0;
            
            takeHandArray.forEach( (card) => {

                if (card.value == 'ACE') {
                    flagAce = true;
                    console.log("ace detected");
                    playerHasNumAces++;
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
                
                playerValue = handValue;
                if ( handValue > 21) {
                    console.log("busteD!!");
                    var elem = document.querySelector('.choices');
                    elem.style.display = 'none';
                    gameoverscreen();
                }
            })

        }

        // once you stand AI takes over
        /* function to handle stand */
        btnStand.addEventListener('click', () => {
            // if ace flag == true add 1
            // check whether the value goes over 21 for 11 if true 
            // then set the value to 1

            var elem = document.querySelector('.choices');
            elem.style.display = 'none';

            // also check how many aces are there
            if ( flagAce == true) {
                console.log('how many aces: ' + playerHasNumAces );
                console.log('handle function: ' + playerValue);
                if ( playerHasNumAces > 1) {
                    //for loop
                    
                }
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
            ele.remove();
            handleAi(dealerHand);
        })

        function handleAi( myArray ) {
            let count = 0;
            var computerAceFlag = false;
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
            
            // end the game
            if ( dealerValue >= 17 ) {
                // dealer stays
                compareResults();
                return;
            }
            
            // dealer needs to hit
            var req2 = new XMLHttpRequest();
            req2.open('GET', 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=1', true);
            req2.onreadystatechange = function () {
                if (req2.readyState === XMLHttpRequest.DONE && req2.status === 200) {
                    var data = JSON.parse(this.response);
                    dealerHand.push(data.cards[0]);
                    const imag = document.createElement('img');
                    imag.src = data.cards[0].image;
        
                    const myDiv = document.createElement('div');
                    myDiv.setAttribute('class', 'card');
                    myDiv.appendChild(imag);
                    board.appendChild(myDiv);

                    if ( (data.cards[0].value == 'KING')  || (data.cards[0].value == 'QUEEN') || (data.cards[0].value == 'JACK') ) {
                        // dealer bust!
                        dealerValue += 10;
                        if (dealerValue > 21 ) {
                            console.log('dealer bust');
                            compareResults();
                            return;
                        }
                    }

        
                    // check the state
                    dealerValue += parseInt(data.cards.value);
                        
                } else {
                    console.log('ai couldnt access api');
                }
                
            }  
            req2.send(); 
            compareResults();
        }

        function compareResults() {
            if ( dealerValue > 21) {
                winnerCaption.innerText  = 'Dealer bust! You win!';
            }
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

        // play again
        var playAgain = document.getElementById('playAgainBtn');
        playAgain.addEventListener('click', () => { 
            // clear the board
            console.log('clearing the board');
            var elem = document.querySelector('.gameover');
            elem.style.display = "none";
            reset();
            startGame();
        })

        function reset() {
            var board = document.getElementById('brd');
            removeAllChildNodes(board);
            var hand = document.getElementById('hnd');
            removeAllChildNodes(hand);

            console.log('Discard pile should be empty: ');
            discardPile.forEach( (card) => {
                console.log(card);
            })
            playerHand.forEach( () => {
                discardPile.push(playerHand.pop());
            })
            console.log('Discard pile after playerHand: ');
            discardPile.forEach( (card) => {
                console.log(card);
            })
            dealerHand.forEach( () => {
                discardPile.push(dealerHand.pop());
            })

            console.log('Discard pile after playerHand and dealerHand: ');
            discardPile.forEach( (card) => {
                console.log(card);
            })
            playerHand.length = 0;
            dealerHand.length = 0;
            dealerHandVal.innerText = 0;
            playerValue = 0;
            dealerValue = 0;
            playerHasNumAces = 0;
            flagAce = false;
            flagAceComputer = false;
            request = null;
            var elem = document.getElementById('handValue');
            elem.innerText = 0;
            var controls = document.querySelector('.choices');
            controls.style.display = "block";
        }

        function removeAllChildNodes(parent) {
            // if empty return
            if (parent.firstChild == null) {
                return;
            }
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        function startGame() {
            console.log('begin new round ');
            let request = new XMLHttpRequest();
            request.open('GET', 'https://deckofcardsapi.com/api/deck/'+deckId+'/draw/?count=4', true);
            request.onreadystatechange = function () {
                var blackjack = false;
                let dealerAceFlag = false;
                let dealerHasTen = false;
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    //https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
                    var data = JSON.parse(this.response);
                    console.log(data);  
                    console.log('were in')
                    drawnCards = data.cards;
                  
                    playerHand.push(drawnCards[0]);
                    playerHand.push(drawnCards[2]);
                    dealerHand.push(drawnCards[1]);
                    if (drawnCards[1].value == 'ACE' || drawnCards[1].value == 10 || drawnCards[3].value == 'KING' || drawnCards[3].value == 'QUEEN' || drawnCards[3].value == 'JACK' ) {
                        if ( drawnCards[1].value == 'ACE' ) {
                            dealerAceFlag = true;
                        }
                        dealerHasTen = true;
                    }
                    const img = document.createElement('img');
                     img.src = dealerHand[0].image;
                    const div = document.createElement('div');
                    div.setAttribute('class' ,'card');
                    div.appendChild(img);
                    board.appendChild(div);
                    dealerHand.push(drawnCards[3]);
                    if ( dealerAceFlag ) {
                        if (drawnCards[3].value == 'KING' || drawnCards[3].value == 'QUEEN' || drawnCards[3].value == 'JACK' || drawnCards[3].value == 10 ) {
                            console.log('Dealer gets blackjack!');
                            gameoverscreen();
                            return;
                        }
                    }
    
                    if ( dealerHasTen ) {
                        if ( drawnCards[3].value == 'ACE') {
                            console.log('Dealer gets blackjack!');
                            compareResults();
                            return;
                        }
                    }
    
                    // face down card
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
                      else if ( (card.value == 'KING')  || (card.value == 'QUEEN') || (card.value == 'JACK') || (card.value == 10 ) ) {
                            if ( flagAce == true) {
                                blackjack = true;
                                console.log('blackjack!!');
                                compareResults();
                                return;
                            }
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

        }