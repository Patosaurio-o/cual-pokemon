$('document').ready( () => {
  for(let i=1;i<=151;i++){
    $('#poke-ball').append(
      `<div class="poke-algo">
        <img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></img>
      </div>`
    );
  }
  $('img').on('click', function() {
    const pokeId = $(this).attr('id');
    const getData = async pokeId =>  {
      const datosPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
      $('.nombre').html(datosPokemon.data.name); 
      $('.altura').html(`<b>Altura:</b> ${datosPokemon.data.height} cm`);
      $('.peso').html(`<b>Peso:</b> ${datosPokemon.data.weight} kg`);
      $('.elejido').html(`<img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeId}.png" alt="#">`);
      let list = "";
      for (let tipos of datosPokemon.data.types) {
        list += `&curren; ${tipos.type.name}<br>` 
      }
      $('.tipo').html(`<b>Tipo:</b> ${list}`);
    }
    getData(pokeId);
  }) 
}); 







  /*  $('img').on('click', function() {
      let pokeId = $(this).attr('id');
      $.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`, pokemon => {
        let nombre = pokemon.name;
        let altura = pokemon.height;
        let  peso = pokemon.weight;
        let list = '<span><b>tipo:</b>';
        for(let t=0;t<pokemon.types.length;t++){
          list += ` &curren;${pokemon.types[t].type.name}<br>`;
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
          const list = '<span><b>tipo:</b>';
          for(let t=0;t<pokemon.types.length;t++){
            list += ` &curren;${pokemon.types[t].type.name}<br>`;
            list += '</span>'
          )
        });  
       })*/