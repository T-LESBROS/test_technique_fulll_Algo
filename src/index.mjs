import "./styles.css";

// Déclaration des bornes
const inf = 1;
const sup = 100;

// Création de la liste
const list = document.createElement("ul");
document.body.appendChild(list);

// Algorithme
for (let i = inf; i <= sup; i++) {
  let display = "";
  if (i % 3 === 0) {
    display += "Fizz";
  }
  if (i % 5 === 0) {
    display += "Buzz";
  }
  // Ajout du résulatat de l'algorithme à la liste
  const listItem = document.createElement("li");
  listItem.textContent = display === "" ? i : display;
  list.appendChild(listItem);
}
