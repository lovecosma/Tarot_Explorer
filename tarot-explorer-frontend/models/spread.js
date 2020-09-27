class Spread {

  static all = []

  constructor(id, query, spread_type, cards, signature) {
    this.id = id
    this.query = query
    this.spread_type = spread_type
    this.cards = cards
    this.signature = signature
  }

//Creating spread to persist in DB in backend

  static sendSpreadInfo(query, spread_type, cards){
    let formData = {
    spread: {
      query: query,
      spread_type: spread_type,
      card_ids: cards
    }
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch(SPREAD_BASE_URL, configObj)
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    Spread.getSpread()
  })
  .catch(error => alert(error))

  }

  //Get and render the previously made spread from list of all spreads

    static getSpread(){
    fetch(SPREAD_BASE_URL)
    .then(resp => resp.json())
    .then(json => Spread.renderSpread(json))
    .catch(error => alert(error))
  }

  static renderSpread(spreads){
    let last_spread = spreads[spreads.length-1]
    let spread_type_array = last_spread.spread_type.split(" / ")
    card_one_header().innerText = spread_type_array[0]
    card_two_header().innerText = spread_type_array[1]
    card_three_header().innerText = spread_type_array[2]
    let first_card = Card.all.find(card => card.id == last_spread.cards[0].id)
    let second_card = Card.all.find(card => card.id == last_spread.cards[1].id)
    let third_card = Card.all.find(card => card.id == last_spread.cards[2].id)
    first_card.display(card_1)
    second_card.display(card_2)
    third_card.display(card_3)
    let done = document.createElement('button')
    done_div().className = 'horizontal-center'
    done_div().appendChild(done)
    done.className = "waves-effect blue waves-light btn"
    done.innerText = "Done with this spread?"
    done.id = 'done'
    done.addEventListener('click', Spread.addSignature.bind(last_spread))
  }

  //Get and render all previously made spreads

  static getSpreads(){
    fetch(SPREAD_BASE_URL)
    .then(resp => resp.json())
    .then(json => Spread.renderSpreads(json))
    .catch(error => alert(error))
  }

   static renderSpreads(spreads){
     if (spreads.length > 0) {
       spreads.forEach((spread, i) => {
        if(spread.signature == null){ spread.signature == "Mega Mysterious Seeker" }
        let new_spread = new Spread(spread.id, spread.query, spread.spread_type, spread.cards, spread.signature)
        Spread.all.push(new_spread)
       });
     }
     Spread.displaySpreads()
   }

   // Send PATCH request to add optional signature

   sendSignatureInfo(){

    let formData = {
      spread: {
       signature: this.signature
      }
    }

  let configObj = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch(SPREAD_BASE_URL+`/${this.id}`, configObj)
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    Spread.displaySpreads()
  })
  .catch(error => alert(error))
  }

  static addSignature(){
    let signature =  prompt("Would you like to add a signature to this spread? Everyone can view it in the list below.", "Some Mysterious Seeker...")
    if (signature == null){
      signature = "Some Super Mysterious Seeker..."
    }
    const spread = new Spread(this.id, this.query, this.spread_type, this.cards, signature)
    spread.sendSignatureInfo()
    Spread.all.push(spread)
    removeElement('done')
    resetInputs()
  }

  //Display all spreads in list of spreads

  static displaySpreads(){
    removeAllChildNodes(spreads_list())
    Spread.all.forEach((spread, i) => {
      const spread_div = document.createElement('div')
      const spread_header_div = document.createElement('div')
      const spread_title = document.createElement('h3')
      const spread_signature_slot = document.createElement('h5')
      const ul = document.createElement('ul')
      let background_color = ''

      spreads_list().appendChild(spread_div)
      spread_div.id = `spread-${spread.id}`
      spread_div.appendChild(spread_header_div)

      spread_header_div.className = "blue lighten-5"
      spread_header_div.appendChild(spread_title)
      spread_title.innerText = spread.query
      spread_title.className = "black-text"
      spread_header_div.appendChild(spread_signature_slot)
      spread_signature_slot.className = 'center-align'
      if(spread.signature == null){spread.signature = "Some Confused Seeker"}
      spread_signature_slot.innerText = `pulled by ${spread.signature}`
      spread_div.appendChild(ul)
      ul.className = 'collapsible'
      let spread_type_array = spread.spread_type.split(' / ')

      spread.cards.forEach((card, i) => {
        if (i == 0) {
           background_color = 'red'
        }else if (i == 1) {
           background_color = 'green'
        }else if (i == 2) {
           background_color = 'blue'
        }
        const slot = document.createElement('li')
        const slot_header = document.createElement('div')
        const slot_header_span = document.createElement('span')
        const slot_title = document.createElement('h4')
        const slot_body = document.createElement('div')
        const slot_body_span = document.createElement('span')
        ul.appendChild(slot)
        slot.appendChild(slot_header)
        slot_header.className = `collapsible-header ${background_color}`
        slot_header.appendChild(slot_header_span)
        slot_header_span.className = 'white-text'
        slot_header_span.appendChild(slot_title)
        slot_title.innerText = spread_type_array[i]
        slot.appendChild(slot_body)
        slot_body.className = `collapsible-body white`
        slot_body_span.className = 'black-text'
        slot_body.appendChild(slot_body_span)
        Card.display(card, slot_body_span)
      });
    });
    set_collapsible()
  }

}
