import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
const PokemonList = ({ pokemons }) => {

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        let id = pokemon.id.toString().padStart(3, "0");
        return (
          <PokemonCard
            name={pokemon.name}
            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} // {pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
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
