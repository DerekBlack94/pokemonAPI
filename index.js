function display_pokemon(pokemonName, target){
 
let url = "https://pokeapi.co/api/v2/pokemon/"+ pokemonName +'/'
console.log("URL",url);

fetch(url)
.then(function(result) {
    return result.json(); 
  })
  .then(function(json) {
    results(json, target);

});

}

function results(json, target){
    console.log(json);
    let height = json.height
    let weight = json.weight
    console.log(json.height);
    console.log(json.weight);
    let textDiv = document.getElementById(`${target}`);
 let tall = document.createElement('p');
 let mass = document.createElement('p');
 mass.innerText = `${'Weight: '}${json.weight}${' Pounds'}`;
 tall.innerText = `${'Height: '}${json.height}${' Feet'}`;
 textDiv.appendChild(tall);
 textDiv.appendChild(mass);
}
display_pokemon('cubone','text');
display_pokemon("gengar",'text2');
display_pokemon('spoink','text3');
display_pokemon("duskull","text4");
display_pokemon('banette','text5');
display_pokemon("grimer",'text6');
display_pokemon('drowzee','text7');
display_pokemon("yamask","text8");
display_pokemon('lampent','text9');
display_pokemon("palossand","text10");




