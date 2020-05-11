function checkHuman(character){
    return character.species == "Human"
}
function checkAlien(character){
    return character.species == "Alien"
}
export function filterData(data, condition){
    let dataFilter = []
    if(condition == "human"){
        dataFilter = data.filter(checkHuman);
    }else if(condition == "alien"){
        dataFilter = data.filter(checkAlien);
    }
    return dataFilter;
}
export function sortData(data, sortBy, sortOrder){
    return data.sort(function (a, b){
        return a.name < b.name? -1 : a.name > b.name? 1 : 0;
    });
}
function checkAlive(character){
    return character.status == "Alive"
}
function checkDead(character){
    return character.status == "Dead"
}
export function computeStatus(data){
   let countAlive = data.filter(checkAlive).length;
   let countDead = data.filter(checkDead).length;
    let computedData = {"alive": countAlive, "dead": countDead}
    return computedData;
}
