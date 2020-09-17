BASE_URL = "http://localhost:3000/cards"
const deck = []

document.addEventListener("DOMContentLoaded", onLoad)
const cardList = () => document.getElementById('card-list')


function onLoad(){

getCards()

  function getCards(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(json => renderCards(json))
  }
}
