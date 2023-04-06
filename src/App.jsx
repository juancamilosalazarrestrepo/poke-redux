import "./App.css";
import Searcher from "./components/Searcher";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./assets/pokedex-3d-logo.jpg";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { getPokemonsWithDetails } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <div className="logoContainer">
        <img src={logo} alt="PokeduxLogo" />
      </div>{" "}
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
