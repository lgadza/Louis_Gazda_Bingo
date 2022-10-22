const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
  h1.innerText = "Louis Gadza";
});
h1.addEventListener("mouseout", () => {
  h1.innerText = "Louis";
});
const ul = document.querySelector("#add");
const addBtn = document.querySelector("#button");
addBtn.onclick = function () {
  const nameToAdd = document.querySelector("#add-names").value;
  const li = document.createElement("li");
  if (nameToAdd === "") {
    alert("Please enter something");
  } else {
    li.appendChild(document.createTextNode(nameToAdd));
    ul.appendChild(li);
  }
  //   li.classList("names");
};
addBtn.addEventListener("mouseout", () => {
  const nameToAdd = document.querySelector("#add-names");
  nameToAdd.textContent = null;
});
const bingoContainer = document.querySelector("#bingo");
const myBtn = document.querySelector("#myBtn");
//function bingoGame() {
const gameName = ["G", "A", "D", "Z", "A"];
for (let i = 0; i < gameName.length; i++) {
  const cell = document.createElement("h3");
  let textNode = document.createTextNode(gameName[i]);
  cell.style.fontWeight = "bold";
  // cell.style.borderStyle = "none";
  // cell.style.borderRadius = "0px";
  cell.style.fontSize = "2rem";
  cell.style.color = "red";
  cell.style.backgroundColor = "rgb(229, 183, 183)";
  cell.appendChild(textNode); //= i;
  cell.classList = "gameName";
  bingoContainer.appendChild(cell);
}
for (let i = 1; i <= 24; i++) {
  if (i === 13) {
    const cell = document.createElement("h3");
    let textNode = document.createTextNode("FREE");
    cell.appendChild(textNode); //= i;
    cell.classList = "gameName";
    cell.style.color = "red";
    cell.style.fontWeight = "bold";
    cell.style.fontFamily = "sans-serif";
    bingoContainer.appendChild(cell);
  }
  let randomPick = Math.floor(Math.random() * 99);
  const cell = document.createElement("h3");
  let textNode = document.createTextNode(randomPick);
  cell.appendChild(textNode); //= i;
  cell.classList = "nums";
  bingoContainer.appendChild(cell);
}
let cells = document.querySelectorAll(".nums");

//for (let i = 0; i <= 76; i++) {
myBtn.addEventListener("click", () => {
  let randomCell = Math.floor(Math.random() * 25 + 1);
  localStorage.setItem("randomCell", randomCell);
  if (cells[randomCell]) {
    cells[randomCell].classList = "nums selected";
    cells[randomCell].style.color = "black";
    cells[randomCell].style.backgroundColor = "coral";
  }
});
//}

const secondDiv = document.querySelector(".selectedNums");
let selectedCells = document.querySelector(".nums .selected");
myBtn.addEventListener("click", () => {
  // let randomCell = Math.floor(Math.random() * 25 + 1);

  const cellSelected = document.createElement("h3");
  // let randomCell = localStorage.getItem("randomeCell");
  let textNode = document.createTextNode(randomCell);
  cellSelected.appendChild(textNode); //= i;
  cellSelected.classList = "nums";
  secondDiv.appendChild(cellSelected);
});
