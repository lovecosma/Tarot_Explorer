class Card {

  static all = []

  constructor(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright, url){
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
    this.image_url = url
  }

   display(spot){
   const card = document.createElement('div')
   const img = document.createElement('img')
   const img_div = document.createElement('div')
   img_div.style = 'display: flex; justify-content: center;'
   img.src = this.image_url
   card.className = 'white-text'
   const card_name = document.createElement('h3')
   card_name.className = 'white-text'
   const card_pos = document.createElement('p')
   card_pos.className = 'white-text'
   const short_desc = document.createElement('p')
   short_desc.className = 'white-text'
   const br = document.createElement('br')
   const long_desc = document.createElement('p')
   long_desc.className = 'white-text'
   const header = document.createElement('p')
   header.className = 'white-text'
   const long_desc_div = document.createElement('div')
   card.className = 'teal lighten-2'
   card_name.innerText = this.value_int + " " + this.name
   long_desc.innerText = this.desc
   if(this.upright) {
     card_pos.innerText = "upright";
     short_desc.innerText = "Meaning: " + this.meaning_up
   }else {
     card_pos.innerText = "reversed";
     short_desc.innerText = "Meaning: " + this.meaning_rev
     img.transform = 'rotateY(180)'
   }
   spot().appendChild(card_name)
   spot().appendChild(card_pos)
   spot().appendChild(img_div)
   img_div.appendChild(img)
   spot().appendChild(short_desc)
   spot().appendChild(long_desc_div)
   long_desc_div.appendChild(long_desc)
   }

   static getCards(){
     fetch(BASE_URL)
     .then(resp => resp.json())
     .then(json => {
       Card.createCards(json)
     })
   }


 static createCards(cardsData){
   cardsData.forEach((data, i) => {
     let array = [true, false]
     const upright = array[Math.floor(Math.random() * array.length)];
     Card.create(data.id, data.name_short, data.name, data.value, data.value_int, data.meaning_up, data.meaning_rev, data.desc, data.suit, data.card_type, upright, data.image_url)
   });
 }

 static create(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright, image_url){
      let card = new Card(id, name_short, name, value, value_int, meaning_up, meaning_rev, desc, suit, card_type, upright, image_url)
      Card.all.push(card)
  }

 static displayCards(cardData){
   cardList().innerHTML = ''
   Card.all.forEach((card, i) => { card.display() });
  }

  static random(){
    return Card.all[Math.floor(Math.random() * Card.all.length)]
  }

  static display(card_object, spot){
    const card = document.createElement('div')
    const card_name = document.createElement('h3')
    card_name.className = 'black-text'
    const card_pos = document.createElement('p')
    const short_desc = document.createElement('p')
    const br = document.createElement('br')
    const long_desc = document.createElement('p')
    const header = document.createElement('p')
    const long_desc_div = document.createElement('div')
    card.className =''
    card_name.innerText = card_object.value_int + " " + card_object.name
    long_desc.innerText = card_object.desc
    header.innerText = 'More'
    if(card_object.upright) {
      card_pos.innerText = "upright";
      short_desc.innerText = "Meaning: " + card_object.meaning_up
    }else {
      card_pos.innerText = "reversed";
      short_desc.innerText = "Meaning: " + card_object.meaning_rev
    }
    spot.appendChild(card_name)
    spot.appendChild(card_pos)
    spot.appendChild(short_desc)
    spot.appendChild(long_desc_div)
    long_desc_div.appendChild(long_desc)
  }
}
