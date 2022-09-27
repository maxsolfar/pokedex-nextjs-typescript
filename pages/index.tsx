import type { GetStaticProps, NextPage } from "next";
import { MenuNavBar } from "../components/ui";
import { PokeAPI } from "../api";
import { PokemonListResponse, SinglePokemon } from "../interfaces";
import { Container, Grid } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon";

interface IProps {
  pokemons: SinglePokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <>
      <MenuNavBar />
      <Container lg>
        <Grid.Container gap={2} justify={"flex-start"}>
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PokeAPI.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SinglePokemon[] = data.results?.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
