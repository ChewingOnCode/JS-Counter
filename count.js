let count = 0;
const countEl = document.getElementById("count");
const saveEl = document.getElementById("save-el");
function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
