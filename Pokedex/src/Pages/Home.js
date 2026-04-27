import NavBar from "../Components/Navbar";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PokemonCard from "../Components/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    var endPoints = [];

    for (let i = 1; i < 151; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    var response = axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemons(res)).catch((err) => (err));
    return response;
  };
  const pokeFilter = ((name) => {
    if (name === "") {
      getPokemons()
    }
    var filteredPokemons = [];
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name.toLowerCase())) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  })
  return (
    <div>
      <NavBar pokeFilter={pokeFilter} />
      <Container maxWidth="false" >
        <Grid container spacing={5}>
          {pokemons.map((pokemon, key) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}