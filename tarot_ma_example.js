
//Tell the library which element to use for the table

//cards.init({table:'#card-table', type:STANDARD});
cards.init({table:'#card-table-tma', type:TAROT_MA});

//Create a new deck of cards
deck = new cards.Deck();
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 100;

//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all);
//No animation here, just get the deck onto the table.
deck.render({immediate:true});

//Now lets create a couple of hands, one face down, one face up.
//upperhand = new cards.Hand({faceUp:false, y:100});
//lowerhand = new cards.Hand({faceUp:true,  y:500});
largehand = new cards.Hand({faceUp:true,  y:500});


//Lets add a discard pile
discardPile = new cards.Deck({faceUp:true});
discardPile.x += 100;

discardPile.addCard(deck.findCard('tma1'));
discardPile.addCard(deck.findCard('tma10'));

//Let's deal when the Deal button is pressed:
$('#deal').click(function() {
	//Deck has a built in method to deal to hands.
	$('#deal').hide();
	//deck.deal(5, [upperhand, lowerhand], 50, function() {
	deck.deal(24, [largehand], 50, function() {
		//This is a callback function, called when the dealing
		//is done.
		//discardPile.addCard(deck.topCard());
		discardPile.render();
	});
});


//When you click on the top card of a deck, a card is added
//to your hand
deck.click(function(card){
	if (card === deck.topCard()) {
		lowerhand.addCard(deck.topCard());
		lowerhand.render();
	}
});

//Finally, when you click a card in your hand, if it's
//the same suit or rank as the top card of the discard pile
//then it's added to it

//lowerhand.click(function(card){
largehand.click(function(card){
//	if (card.suit == discardPile.topCard().suit
//		|| card.rank == discardPile.topCard().rank) {
		discardPile.addCard(card);
		discardPile.render();
		largehand.render();
//	}
});


//So, that should give you some idea about how to render a card game.
//Now you just need to write some logic around who can play when etc...
//Good luck :)
