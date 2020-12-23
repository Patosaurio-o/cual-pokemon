$('document').ready(function() {
  for(let i=1; i <= 151; i++){
    $('#poke-ball').append(
      `<div class="poke-algo">
        <img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></img>
      </div>`
    );
  }
  $('img').on('click', function(){
    let pokeId = $(this).attr('id');
    $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`, function(pokemon){
      let nombre = pokemon.name;
      let altura = pokemon.height;
      let  peso = pokemon.weight;
      let list = '<span><b>tipo:</b>';
      for(let t=0;t<pokemon.types.length;t++){
        list += ' &curren;' + pokemon.types[t].type.name + '<br>';
      }
      list += '</span>'
      $('#mostar-pokemon').html(
        `<img class="elejido" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeId}.png"></img>
        <div id="datos">
        <p class="mostrarNombre">${nombre}</p>
        ${list}
        <span><b>Altura:</b> ${altura}</span>
        <br>
        <span><b>peso:</b> ${peso}</span>
        </div>`
      )
    });  
  }) 
}); 