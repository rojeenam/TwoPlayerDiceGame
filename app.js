
var scores ,roundScore, activePlayer ,dice ,gamePlaying,lastdice;

init();

document.querySelector(".btn-roll").addEventListener('click',function(){

 	if(gamePlaying)
 	{
 		//1.random number
	 	var dice1 = Math.floor(Math.random() * 6 )+1;
	 	var dice2 = Math.floor(Math.random() * 6 )+1;

	 	
	 	//2>display the results

	 	document.getElementById('dice-1').style.display ='block';
	 	document.getElementById('dice-2').style.display ='block';

	
	 	document.getElementById('dice-1').src = 'assets/dice-' + dice1 + '.png';
	 	document.getElementById('dice-2').src = 'assets/dice-' + dice2 + '.png';

	 if(dice1 !== 1 && dice2 !==1)
	 	{
	 		//Add score

	 		roundScore += dice1 + dice2;
	 		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	 	}
	 	else
	 	{
	 		nextPlayer();
	 	}
 	}

 	

 });


 document.querySelector('.btn-hold').addEventListener('click',function()
 {

 	if(gamePlaying)
 	{
 		scores[activePlayer] += roundScore;

	 	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	 	var input = document.querySelector('.final-score').value;
	 	console.log(input);

	 	if(input)
	 	{
	 		var winningScore = input;
	 	}
	 	else
	 	{
	 		winningScore =100;
	 	}

	 	
	 	
	 	if(scores[activePlayer] >= winningScore)
	 	{
	 		document.querySelector('#name-' + activePlayer).textContent = "Winner!!";
	 		document.getElementById("dice-1").style.display = 'none';
	 		document.getElementById("dice-2").style.display = 'none';

	 		document.querySelector('.player-1-panel').classList.add('winner');
	 		document.querySelector('.player-1-panel').classList.remove('active');
	 		gamePlaying = false;

	 	}
	 	else
	 	{
	 	//Next player

	 		nextPlayer();
	 	}
 	}
 	

 });

 //Next Player

 function nextPlayer()
 {

 		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 		roundScore = 0;

 		document.getElementById('current-0').textContent ='0';
 		document.getElementById('current-1').textContent ='0';

 		// document.querySelector('.player-0-panel').classList.remove('active');
 		// document.querySelector('.player-1-panel').classList.add('active');


 		document.querySelector('.player-0-panel').classList.toggle('active');
 		document.querySelector('.player-1-panel').classList.toggle('active');

 		document.getElementById("dice-1").style.display = 'none';
 		document.getElementById("dice-2").style.display = 'none';


 }

 document.querySelector('.btn-new').addEventListener('click',init);


 function init()
 {
 	scores = [0,0];
 	activePlayer = 0;
 	roundScore = 0;
 	gamePlaying = true;


 	document.getElementById("dice-1").style.display = "none";
 	document.getElementById("dice-2").style.display = "none";



	 document.getElementById('score-0').textContent = '0';
	 document.getElementById('score-1').textContent = '0';
	 document.getElementById('current-0').textContent = '0';
	 document.getElementById('current-1').textContent = '0';

	 document.getElementById("name-0").textContent = 'Player 1';
	 document.getElementById("name-1").textContent = 'Player 2';

 	document.querySelector('.player-0-panel').classList.remove('winner');
 	document.querySelector('.player-1-panel').classList.remove('winner');

 	document.querySelector('.player-0-panel').classList.remove('active');
 	document.querySelector('.player-1-panel').classList.remove('active');
 	document.querySelector('.player-0-panel').classList.add('active');


 }






