import "./App.css";
import Searcher from "./components/Searcher";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Col, Spin } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./assets/pokedex-3d-logo.jpg";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
//import { toJS } from "immutable";

function App() {
  const pokemons = useSelector((state) => state.getIn(["data","pokemons"],shallowEqual)).toJS();
  const loading = useSelector((state) => state.getIn(['ui','loading']));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
