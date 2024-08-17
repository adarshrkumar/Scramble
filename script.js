let input = document.getElementById('input')
let output = document.getElementById('output')
let delim = document.getElementById('delim')
let lastString

function go() {
  let string = input.value
  if (!string) string = 'No String Was Passed'
  else string = String(string)
  if (string !== lastString) {
    let letters = string.split('')
    let newLetters = []
    while (letters.length > 0) {
      let randNum = Math.floor(Math.random()*letters.length)
      let item = letters[randNum]
      letters.splice(randNum, 1)
      newLetters.push(item)
    }
    let newString = newLetters.join(delim.value)
    output.value = newString
    output.removeAttribute('disabled')
  }
}

input.addEventListener('keyup', go)
input.addEventListener('change', go)
delim.addEventListener('keyup', go)
delim.addEventListener('change', go)