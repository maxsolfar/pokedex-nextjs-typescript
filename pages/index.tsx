import type { GetStaticProps, NextPage } from "next";
import { Pagination } from "@nextui-org/react";
import { PokeAPI } from "../api";
import { Pokemon, PokemonListResponse, SinglePokemon } from "../interfaces";
import { Container, Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";
import { Layout } from "../components/layouts";


interface IProps {
  pokemons: SinglePokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {

  return (
    <Layout>
      <Container lg>
        <Grid.Container gap={2} justify={"flex-start"}>
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
        <Pagination total={8} initialPage={1}/>

      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PokeAPI.get<PokemonListResponse>("/pokemon?limit=151");
  /* const getPokemons = async (id: number) =>{
    const { data } = await PokeAPI.get<SinglePokemon>(`/pokemon/${id}`);
    return data;
  }
  let arrayPokemons = [];
  for (let index = 1; index <= 151; index++){
    let data = await getPokemons(index);
    arrayPokemons.push(data);
  }

  const pokemons: SinglePokemon[] = arrayPokemons?.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      pokemon.id
    }.png`,
    types: pokemon.types,
  })); */

  const pokemons: SinglePokemon[] = data.results?.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      index + 1
    }.png`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

