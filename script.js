//Elemento 1
var poke1 = parseInt(prompt("Get me your first favorite pokemon number"));
fetch('https://pokeapi.co/api/v2/pokemon/'+poke1+"/")
.then(respuesta => respuesta.json())
.then(pokemon1 => {
  let element1 = document.getElementById('elemento1')
  element1.innerHTML = `<p> Name: ${pokemon1.name}<p>
  <img src='${pokemon1.sprites.front_default}'><p>Height: ${pokemon1.height}<p><p>Weight: ${pokemon1.weight}<p><p>Typ3e: ${pokemon1.types[0].type.name}<p>`;
  console.log(pokemon1)
})
.catch(err=>console.log(err))

//Elemento 2
var poke2 = parseInt(prompt("Get me your second favorite pokemon number"));
fetch('https://pokeapi.co/api/v2/pokemon/'+poke2+"/")
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = `<p> Name: ${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>Height: ${pokemon2.height}<p><p>Weight: ${pokemon2.weight}<p><p>Type: ${pokemon2.types[0].type.name}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))

//Elemento 3
var poke3 = parseInt(prompt("Get me your third favorite pokemon number"));
fetch('https://pokeapi.co/api/v2/pokemon/'+poke3+"/")
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = `<p>Name: ${pokemon3.name}<p>
  <img src='${pokemon3.sprites.front_default}'><p>Height: ${pokemon3.height}<p><p>Weight: ${pokemon3.weight}<p><p>Type: ${pokemon3.types[0].type.name}<p>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))