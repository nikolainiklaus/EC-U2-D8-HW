function countTravels() {
  let trips = document.querySelectorAll(
    ".destination-card.card img:first-child"
  );
}

function hotBadge() {
  let cards = document.getElementsByClassName("winter-img");
  console.log(cards.length);

  for (let card of cards) {
    card.classList.add("hot");
  }
}

function deleteCards() {
  let cards = document.getElementsByClassName;
  for (let card of cards) {
    card.remove();
  }
}
