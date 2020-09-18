BASE_URL = "http://localhost:3000/cards"
const deck = []

document.addEventListener("DOMContentLoaded", onLoad)
const cardList = () => document.getElementById('card-list')
const card_1 = () => document.getElementById('leftbox')
const card_2 = () => document.getElementById('middlebox')
const card_3 = () => document.getElementById('rightbox')
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
getCards()

  function getCards(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(json => {
      Card.createCards(json)
      cardsLoaded()
    })
  }
}

function cardsLoaded(){
  const first = Card.random().display(card_1)
  const second = Card.random().display(card_2)
  const third = Card.random().display(card_3)
}
