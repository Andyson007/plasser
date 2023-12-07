let names = [];
if (localStorage.getItem('kart') === null) {
  for (let i = 0; i < 16; i++) {
    names.push(i);
  }
} else {
  names = localStorage.getItem('kart').split(',');
}

console.log(names);

function scramble() {
  let currentindex = names.length - 1;
  while (currentindex > 1) {
    const swap = Math.floor(Math.random() * (currentindex - 1));
    const a = names[swap];

    names[swap] = names[currentindex];
    names[currentindex] = a;
    currentindex--;
  }
  render();
  localStorage.setItem('kart', names)
}

function render() {
  const table = document.getElementById("tbl");
  for (let row = 0; row < 2; row++) {
    for (let column = 0; column < 8; column++) {
      table.children[row].children[column].children[0].innerText = names[row * 8 + column];
    }
  }
}

scramble()
