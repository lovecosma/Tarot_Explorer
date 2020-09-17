class Card {

  static all = []

  constructor(name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type){
    this.name_short = name_short
    this.name = name
    this.value = value
    this.value_int = value_int
    this.meaning_up = meaning_up
    this.meaning_rev = meaning_rev
    this.desc = desc
    this.suit = suit
    this.card_type = card_type
  }

  display(){
   const card = document.createElement('div')
   const card_value = document.createElement('h3')
   const card_name = document.createElement('h2')
   card.className = 'card'
   cardList().appendChild(card)
   card.appendChild(card_name)
   card.appendChild(card_value)
  }


 static createCards(cardsData){
   cardsData.forEach((data, i) => { Card.create(data.name_short, data.name, data.value, data.value_int, data.meaning_up, data.meaning_rev, data.desc, data.suit, data.card)});
 }

 static create(name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit){
      let card = new Card(name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit)
      Card.all.push(card)
  }

 static renderCards(cardData){
   cardList().innerHTML = ''
   Card.all.forEach((card, i) => { card.display() });

  }

}
