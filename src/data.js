function checkHuman(character){
    return character.species == "Human";
}
function checkAlien(character){
    return character.species == "Alien";
}
function checkUnknown(character){
    return character.species == "unknown";
}
function checkStatusAlive(character){
    return character.status == "Alive";
}
function checkStatusDead(character){
    return character.status == "Dead";
}
function checkStatusUnknown(character){
    return character.status == "unknown";
}
function checkGenderFemale(character){
    return character.gender == "Female";
}
function checkGenderMale(character){
    return character.gender == "Male";
}
function checkGenderUnknown(character){
    return character.gender == "unknown";
}
export function filterData(data, condition){
    let dataFilter = []
    if(condition == "human"){
        dataFilter = data.filter(checkHuman);
    }else if(condition == "alien"){
        dataFilter = data.filter(checkAlien);
    }else if(condition == "unknown"){
        dataFilter = data.filter(checkUnknown);
    }else if(condition == "alive"){
        dataFilter = data.filter(checkStatusAlive);
    }else if(condition == "dead"){
        dataFilter = data.filter(checkStatusDead);
    }else if(condition == "unknown"){
        dataFilter = data.filter(checkStatusDead); 
    }else if(condition == "unknown-status"){
        dataFilter = data.filter(checkStatusUnknown);
    }else if(condition == "female"){
        dataFilter = data.filter(checkGenderFemale);
    }else if(condition == "male"){
        dataFilter = data.filter(checkGenderMale);
    }else if(condition == "unknown-gender"){
        dataFilter = data.filter(checkGenderUnknown);
    }
    return dataFilter;
}
function sortAz (a, b){
    return a.name < b.name? -1 : a.name > b.name? 1 : 0;
}
function sortZa (a,b){
    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
}
export function sortData(data, condition){
    if(condition == "a-z"){
        return data.sort(sortAz)
    }else if(condition == "z-a"){
        return data.sort(sortZa);
    }
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