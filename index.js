// Add your functions and code here

//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(value){
  kittens.push(value)
  return kittens
}
function destructivelyPrependKitten(value){
  kittens.unshift(value)
  return kittens
}