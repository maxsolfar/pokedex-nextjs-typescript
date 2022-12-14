import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import NextLink from "next/link";
import React from "react";
import { PokeAPI } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <Container lg>
        <Grid.Container css={{ marginTop: "5px" }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{ padding: "30px" }}>
              <Card.Body>
                <Card.Image
                  src={
                    pokemon.sprites.other?.home.front_default || "/no-img.png"
                  }
                  alt={pokemon.name}
                  width={"100%"}
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button color={"primary"}>
                  Add Favorites
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container display="flex" direction="row" gap={0}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const firstGenPokemons = [...Array(151)].map(
    (value, index) => `${index + 1}`
  );

  return {
    paths: firstGenPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await PokeAPI.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetail;
