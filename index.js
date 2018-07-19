// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(value){
  kittens.shift(value)
  return kittens
}