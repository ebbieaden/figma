saveEl = document.getElementById("score-el")
savedEl = document.getElementById("scores-el")

save1 = 0
saved2 = 0

function addOne() {
  save1 += 1
  saveEl.textContent = save1
  // savedEl.textContent = save1
}

//Guest Kinni
function addedOne(){
  saved2 +=1
  savedEl.textContent = saved2
}

function addTwo() {
  save1 += 2
  saveEl.textContent = save1

}

//Guest kinni
function addedTwo() {
  saved2 += 2
  savedEl.textContent = saved2
}

function addThr() {
  save1 += 3
  saveEl.textContent = save1

}

//Guest kinni
function addedThr() {
  saved2 += 3
  savedEl.textContent = saved2
}

function reset() {
  saveEl.textContent = 0
  savedEl.textContent = 0
  save1 = 0
  saved2 = 0
}
// Some other day stuff
// if (addOne() > addedOne()) {
//   console.log("Home is winning")
// } else {
//   console.log("Guest is winning")
// }