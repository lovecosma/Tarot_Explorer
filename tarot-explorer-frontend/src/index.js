BASE_URL = "http://localhost:3000/cards"
SPREAD_BASE_URL = "http://localhost:3000/spreads"
const deck = []

function removeElement(elementId) {
    // Removes an element from the document
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

document.addEventListener("DOMContentLoaded", onLoad)

const cardList = () => document.getElementById('card-list')
const card_1 = () => document.getElementById('leftbox')
const card_2 = () => document.getElementById('middlebox')
const card_3 = () => document.getElementById('rightbox')
const spread_form = () => document.getElementById('spread-form')
const query_input = () => document.getElementById('query-input')
const spread_type_input = () => document.getElementById('spread-type-input')
const card_one_header = () => document.getElementById('card 1')
const card_two_header = () => document.getElementById('card 2')
const card_three_header = () => document.getElementById('card 3')
const nav = () => document.getElementById('nav')
const done_div = () => document.getElementById('done_div')
const spreads_div = () => document.getElementById('spreads-div')

const get_first_slot_header = () => document.getElementById('first-slot-header')
const get_first_slot_body = () => document.getElementById('first-slot-body')

const get_second_slot_header = () => document.getElementById('second-slot-header')
const get_second_slot_body = () => document.getElementById('second-slot-body')

const get_third_slot_header = () => document.getElementById('third-slot-header')
const get_third_slot_body = () => document.getElementById('third-slot-body')

const spread_title = () => document.getElementById('spread-title')
const spread_signature_slot = () => document.getElementById('spread-signature-slot')



const set_carousel = () => {
  let elems = document.querySelectorAll('.carousel');
  let instances = M.Carousel.init(elems, {});
}
const set_collapsible = () => {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
}
function onLoad(){

set_carousel()
set_collapsible()
Card.getCards()
spread_form().addEventListener('submit', getFormData)

function getFormData (e){
  e.preventDefault()
  const first = Card.random()
  const second = Card.random()
  const third = Card.random()
  let query = query_input().value
  let spread_type = spread_type_input().value
  const cards = []
  cards.push(first.id)
  cards.push(second.id)
  cards.push(third.id)
  Spread.sendSpreadInfo(query, spread_type, cards)
}

function getSpreads(){
  fetch(SPREAD_BASE_URL)
  .then(resp => resp.json())
  .then(json => {
    Spread.renderSpreadLastSpread(json)
  })
}

function resetInput(){

}


function addSignature(){
  let signature =  prompt("Would you like to add a signature to this spread? Everyone can view it in the list below.", "Some Mysterious Seeker...")
  if (signature == null){
    signature = "Some Super Mysterious Seeker..."
  }
  const spread = new Spread(this.id, this.query, this.spread_type, this.cards, signature)
  spread.sendSignatureInfo()
  Spread.all.push(spread)
  removeElement('done')
}
