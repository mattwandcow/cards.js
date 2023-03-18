//Okay, think it out.
//First, I think we need to load the card.js
//but, then we need to stack the deck
//how do we stack the deck?
//well, we can export the deck type, right?
//we also have the card name
//what if we had a function Deck.DealCardName(str)
//because, we actually just need to deal cards from the deck to the discard
//Sun card stacking can be done by dealing cards effectively to the top of the deck, yeah?

//Loading function takes an array of strings
//For (strings)
//Card is either in discard or stacked.
//Any other concerns?

//Cards that effect the game
//Tower: Draw 2 more cards
//Moon: Can choose to play bottom card
//Sun: See next 3 cards.
//World: Pull card from Discard pile, return it to the deck, and reshuffle
//Temperance: Shuffle Deck
//Death: Shuffled back into deck on use

//Faces that effect the cards
//Fool: Shuffled back in to deck, if a failure, and if Fool is in discard
//Justice: Pulls additional card on occasion
//Tower: Discards all cards, not just the used card
//Moon: Treat any card like the Moon (pick bottom) 
//Sun: Peek at top card on any success
//World: take any number of cards from Discard (not World)
