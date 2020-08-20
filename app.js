/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying;

/*

Math.floor // removes a decimal part of a number
Math.random // generates a random number betwn 0 & 1 

*/

init();


//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;  // set text
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // set html

/*
var x = document.querySelector('#score-0').textContent;
console.log(x);
*/




/*
function btn() {
    //Do something
}
btn();

document.querySelector('.btn-roll').addEventListener('click',btn)    // func that we pass into another func as an argument, eventerListner in this case!

*/

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // do something here in the anonymous function which is context specefic
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';



        // 3. update the round score if the the rolled number was not 1 

        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player

            nextPlayer();

        }
    }
});    // another way to add function within the method itself


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        // Add current score to global score
        score[activePlayer] += roundScore;

        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        //check if player won the game

        if (score[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    // Next player

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    /*
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    */

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);  // call the init func


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';  // we changed the style of dice and removed it.

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}