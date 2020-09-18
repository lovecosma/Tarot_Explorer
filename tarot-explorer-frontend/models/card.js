class Card {

  static all = []

  constructor(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright){
    this.id = id
    this.name_short = name_short
    this.name = name
    this.value = value
    this.value_int = value_int
    this.meaning_up = meaning_up
    this.meaning_rev = meaning_rev
    this.desc = desc
    this.suit = suit
    this.card_type = card_type
    this.upright = upright
  }

   display(spot){
   const _red = 'red'
   const card = document.createElement('div')
   const card_name = document.createElement('h3')
   const card_pos = document.createElement('p')
   const short_desc = document.createElement('p')
   const br = document.createElement('br')
   const long_desc = document.createElement('p')
   const header = document.createElement('p')
   const long_desc_div = document.createElement('div')
   card.className = 'teal lighten-2'
   card_name.innerText = this.value_int + " " + this.name
   long_desc.innerText = this.desc
   header.innerText = 'More'
   if(this.upright) {
     card_pos.innerText = "upright";
     short_desc.innerText = "Meaning: " + this.meaning_up
   }else {
     card_pos.innerText = "reversed";
     short_desc.innerText = "Meaning: " + this.meaning_rev
   }
  spot().className = _red
   spot().appendChild(card_name)
   spot().appendChild(card_pos)
   spot().appendChild(short_desc)

   }


 static createCards(cardsData){
   cardsData.forEach((data, i) => {
     let array = [true, false]
     const upright = array[Math.floor(Math.random() * array.length)];
     Card.create(data.id, data.name_short, data.name, data.value, data.value_int, data.meaning_up, data.meaning_rev, data.desc, data.suit, data.card_type, upright)
   });
 }

 static create(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright){
      let card = new Card(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright)
      Card.all.push(card)
  }

 static displayCards(cardData){
   cardList().innerHTML = ''
   Card.all.forEach((card, i) => { card.display() });
  }

  static random(){
    return Card.all[Math.floor(Math.random() * Card.all.length)]
  }

}
