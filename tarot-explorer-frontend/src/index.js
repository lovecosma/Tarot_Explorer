BASE_URL = "http://localhost:3000/cards"


document.addEventListener("DOMContentLoaded", onLoad)

function onLoad(){
getCards()

  function getCards(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(json => renderCards(json))
  }



  function renderCards(cards){
    debugger
  }
}
