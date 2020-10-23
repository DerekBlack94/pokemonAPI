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

function display_info(button, event){
  event.preventDefault();
  console.log(button);
  switch(button){
    case "btn1":
      display_pokemon('cubone',"text");
      break;
      case"btn2":
      display_pokemon("gengar",'text2');
      break;
      case"btn3":
      display_pokemon('spoink','text3');
      break;
      case"btn4":
      display_pokemon("duskull","text4");
      break;
    case"btn5":
      display_pokemon('banette','text5');
      break;
      case"btn6":
      display_pokemon("grimer",'text6');
      break;
    case"btn7":
      display_pokemon('drowzee','text7');
      break;
    case"btn8":
      display_pokemon("yamask","text8");
      break;
    case"btn9":
      display_pokemon('lampent','text9');
      break;
    case"btn10":
      display_pokemon("palossand","text10");
      break;
    case"btn11":
      display_pokemon("drampa","text11");
      break;








  }

//*display_pokemon('cubone',"text");


}

const pokemon_name = document.querySelectorAll("button")
console.log(pokemon_name);
for ( p of pokemon_name){
  p.addEventListener('click',(event)=>{
    console.log(event.target.id);
    display_info(event.target.id, event);
  })

}
 


