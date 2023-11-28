let names = "";
fetch("names.json")
  .then(response => response.json())
  .then(json => {names =  json["names"]});

function scramble(size) {

  let currentindex = size;
  while (currentindex > 0) {
    const swap = Math.floor(Math.random() * currentindex);
    const a = names[swap];

    names[swap] = names[currentindex];
    names[currentindex] = a;
    currentindex--;
  }
  render();
}

function render() {
  const table = document.getElementById("tbl");
  for (let row = 0; row < 2; row++) {
    for (let column = 0; column < 8; column++) {
      table.children[row].children[column].children[0].innerText = names[row * 8 + column];
    }
  }
}
let i = names.length - 1;

setInterval(() => scramble(i), 1)
setInterval(() => { i-- }, 500)
