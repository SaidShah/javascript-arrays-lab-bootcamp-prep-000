// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(givenArray, value){
  givenArray.shift(value)
  return givenArray
}