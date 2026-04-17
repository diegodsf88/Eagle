const cards = document.querySelectorAll(".bird-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Eagle Spirit " + (index + 1);
  });
});
