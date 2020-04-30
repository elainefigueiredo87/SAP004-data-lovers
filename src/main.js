import data from './data/rickandmorty/rickandmorty.js';

function printCharacter(characterList){
  for (let character of characterList){
    console.log(character.name); 
    document.getElementById("characters").innerHTML += character.name + " ";
  }
  return;
}
printCharacter(data.results);