import data from './data/rickandmorty/rickandmorty.js';
function getCharacters(characterList){
	for (let character of characterList){
	 	printCharacter(character);
	}
}
getCharacters(data.results);

function printCharacter(character){
	let listItem = createListItem(character);
	listItem.innerHTML += "<br/> Status:" + " " + character.status + "<br /> ";
	listItem.innerHTML += "Name:" + " " + character.name + "<br /> ";
	listItem.innerHTML += "Specie:" + " " + character.species + "<br /> ";
	listItem.innerHTML += "Gender:" + " " + character.gender + "<br />";
	listItem.innerHTML += "Origin:" + " " + character.origin.name + "<br />";
}
function createListItem(character){
	let listItem = document.createElement("li");
	listItem.classList.add("character-information");
	document.getElementById("characters-list").appendChild(listItem);
	let img = document.createElement('img'); 
	img.classList.add("character-img")
	img.src = character.image;
	listItem.appendChild(img)

	return listItem;
}
//implementar lógica de episódios 


