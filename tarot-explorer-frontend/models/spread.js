class Spread {

  static all = []

  constructor(id, query, spread_type, cards, signature) {
    this.id = id
    this.query = query
    this.spread_type = spread_type
    this.cards = cards
    this.signature = signature
  }

  // static createSpreads(spreadsData){
  //   spreadData.forEach((data, i) => {
  //   data.pread.display()
  //   });
  // }
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
    getSpreads()
  })

  }

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
  }



  static displaySpreads(){
    Spread.all.forEach((spread, i) => {
      const spread_div = document.createElement('div')
      const spread_header_div = document.createElement('div')
      const spread_title = document.createElement('h3')
      const spread_signature_slot = document.createElement('h5')
      const ul = document.createElement('ul')
      let background_color = ''

      spreads_div().appendChild(spread_div)
      spread_div.id = `spread-${spread.id}`
      spread_div.appendChild(spread_header_div)

      spread_header_div.className = "blue lighten-5"
      spread_header_div.appendChild(spread_title)
      spread_title.innerText = spread.query
      spread_title.className = "black-text"
      spread_header_div.appendChild(spread_signature_slot)
      spread_signature_slot.className = 'center-align'
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

  static renderSpreadLastSpread(spreads){
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
    done.addEventListener('click', addSignature.bind(last_spread))
  }

}