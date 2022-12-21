
import { useState } from 'react';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    Nombre: "",
    especies: "",
    img: "",
    habilidad: "",
    forma: "",
    tipo: "",
  });
  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json()).then((user) => {
        {/* console.log(user)
        console.log(user.abilities[0].ability.name);
        console.log(user.species.name);
        console.log(user.name);
        console.log(user.sprites.front_default);
        console.log(`Habilidad : ${user.abilities[0].ability.name}`);
        console.log(`forma : ${user.forms[0].name}`);
        console.log(`Tipo : ${user.types[0].type.name}`);*/}
        setPokemon({
          Nombre: user.name,
          especies: user.species.name,
          img: user.sprites.front_default,
          habilidad: user.abilities[0].ability.name,
          forma: user.forms[0].name,
          tipo: user.types[0].type.name,
        });
        setPokemonChosen(true);

      });
  }
  return (
    <div className="App">
      <div className='titulo_seccion'>
        <h1>Estadisticas pokemon</h1>
        <input type="text" onChange={e => setPokemonName(e.target.value.toLowerCase())} />
        <button onClick={searchPokemon}>Buscar Pokemon</button>
      </div>
      <div className='SeccionDatos'>
        {!pokemonChosen ? (<h1>Por Favor ingrese un Pokemon </h1>) : (
          <div className='interfaz'>
            <h1>{pokemon.Nombre}</h1>
            <img src={pokemon.img} alt={pokemon.Nombre} width="200px" />
            <h3>Especie: {pokemon.especies}</h3>
            <h3>Habilidad : {pokemon.habilidad}</h3>
            <h3>Forma : {pokemon.forma}</h3>
            <h3>Tipo : {pokemon.tipo}</h3>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
