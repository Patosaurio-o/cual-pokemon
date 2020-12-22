$('document').ready(function() {
  for(let i=1; i <= 151; i++){
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}/`, function(pokemon){
      let nombre = pokemon.name;
      let list = '<h6>Type:</h6> <ul>';
      for(let t=0;t<pokemon.types.length;t++){
        list += '<li>'+ pokemon.types[t].type.name +'</li>';
      }
      list += '</ul>'
      $('#poke-ball').append(
        `<div class="poke-algo">
          <img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></img>
        </div>`
        );
      $('img').on('click', function(){
        var pokeId = $.attr('id');
        $('#mostar-pokemon').html(`<p class="mostrarNombre">${nombre}</p>
        <img id="${pokeId}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></img>
        <p class="mostrarLista">${list}</p>`
        ); 
        console.log(pokeId)
      });
    })
  };
});



