import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
const PokemonList = ({ pokemons }) => {
  console.log("prop", pokemons);

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
     
        let id = pokemon.id.toString().padStart(3, '0')
        console.log(id)
        return (
          <PokemonCard
            name={pokemon.name}
            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            key={pokemon.name}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
