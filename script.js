const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard =false;
let firstCard,secondCard;
let lockBoard = false;
let disable = 0;


function flipCard() {
	if(lockBoard) return;
  this.classList.add('flip');
  if(this===firstCard) return;
  if(!hasFlippedCard){
  	//firstcard
  	hasFlippedCard=true;
  	firstCard = this;
  	return;
  	
  }

  


  	//second card
  	hasFlippedCard=false;
  	secondCard = this;  
  	/*if(this===firstCard)	
  	{	
  		hasFlippedCard=true;
  		return;
  	}*/

  	 console.log(firstCard.dataset.framework);
  	console.log(secondCard.dataset.framework);
  
  	match();
  


}

function match() {
	let comp= firstCard.dataset.framework === secondCard.dataset.framework;
	
	comp ? removeClick() : unFlip();

}
function removeClick(){
	//disable cards click if match 
	
	disable=disable+1;
	firstCard.removeEventListener('click',flipCard);
  	secondCard.removeEventListener('click',flipCard);
  	console.log("cards disabled");
  	
  	setTimeout(()=>{
  		if(disable==6){
  		  		document.getElementById("over").style.display = "inline-flex";}
  	},1000);
  	
  	

}
function unFlip(){
	lockBoard = true;

	//unflip cards
	setTimeout(()=> {
  		firstCard.classList.remove('flip');
  	secondCard.classList.remove('flip');


  	resetBoard();
  },1000)
	console.log("unfliped");
	
}
function resetBoard(){
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}
(function shuffle(){
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
		} );
// adding points+gameover

})();

cards.forEach(card => card.addEventListener('click', flipCard));
