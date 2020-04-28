import data from './data/rickandmorty/rickandmorty.js';
//console.log(data);
function listCharacters(characters){
      let character;
      let arrayCharacters=[];
      for(character of characters){ 
        arrayCharacters.push(character);
      }
      return arrayCharacters;
    }
  listCharacters(data.results);
  let arrayCharacter = listCharacters(data.results);

function printCharacter(character){
  for (let [key, value] of Object.entries(character)){
    console.log(key + " "+ value);  
  }
  return;
}
printCharacter(arrayCharacter[0]);

function setPositionCharacter(arrayCharacter){
    let index;
    let arrayCharcodes=[];
    for(index in arrayCharacter){ 
      arrayCharcodes.push(arrayCharacter.charCodeAt(index));
      console.log(arrayCharcodes)
    }
    return arrayCharcodes;
}
setPositionCharacter(arrayCharacter);



