function navigate(section) {
  alert(section + " button clicked");
}

function loadImage(event) {
  const image = document.getElementById("heroImage");
  image.src = URL.createObjectURL(event.target.files[0]);
}

function searchItems() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterCategory(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "All" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}