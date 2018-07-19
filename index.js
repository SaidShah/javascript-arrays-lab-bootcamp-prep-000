// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(value){
  kittens.push(value)
  return kittens
}

function destructivelyPrependKitten(value){
  kittens.unshift(value)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(value){
var newKittens = kittens.splice(2,0,value)
  return kittens
}