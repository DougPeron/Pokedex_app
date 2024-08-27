const pokemon_search = document.querySelector('.form');
const input = document.querySelector('.search')
const pokemon_name = document.querySelector('.pokemon-name');
const pokemon_num = document.querySelector('.pokemon-num');
const pokemon_img = document.querySelector('.pokemon-img');

const fetchPokemon = async(pokemon) =>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIresponse.json();

    return data;
}

async function renderPokemon(pokemon) {
    const data = await fetchPokemon(pokemon);
    pokemon_name.innerHTML = data.name
    pokemon_num.innerHTML = data.id
    pokemon_img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`
}

pokemon_search.addEventListener('submit', (event) =>{
    event.preventDefault();
    renderPokemon(input.value);
})
