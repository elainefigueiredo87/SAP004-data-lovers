import data from './data/rickandmorty/rickandmorty.js';
//FAZER O LOOP NO DATA E RETORNAR UMA VARIAVEL COM O NOME DE CADA PROPRIEDADE DE CADA PERSONAGEM
function getCharacters(characterList){
	for (let character of characterList){
	 	printCharacter(character);
	}
}
getCharacters(data.results);
//FUNÇÃO PRINTAR AS INFOS DO PERSONAGE, NO ITEM DA LISTA
function printCharacter(character){
	let listItem = createListItem(character);
	listItem.innerHTML += "Status:" + " " + character.status + "<br /> ";
	listItem.innerHTML += "Name:" + " " + character.name + "<br /> ";
	listItem.innerHTML += "Specie:" + " " + character.species + "<br /> ";
	listItem.innerHTML += "Type:"+ " " + character.type + "<br />";
	listItem.innerHTML += "Gender:" + " " + character.gender + "<br />";
	//listItem.innerHTML += "Episodes:" + " " + character.episode + "<br /> " ;
	listItem.innerHTML += "Origin:" + " " + character.origin.name + "<br />";
	//listItem.innerHTML += character.image + "<br /> ";
}
//CRIA O ITEM DA LISTA
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
// fazer com  que a img apareça 

