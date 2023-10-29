fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    var iconElement = document.getElementById("icon");
    var categoryElement = document.getElementById("category");
    var scoreElement = document.getElementById("score");

    var categories = data.map((item) => item.category);
    var score = data.map((item) => item.score);
    var icon = data.map((item) => item.icon);

    iconElement.src = icon;
    categoryElement.textContent = categories;
    scoreElement.textContent = score;
  })
  .catch((error) => {
    console.error("Błąd odczytu pliku JSON: " + error);
  });
