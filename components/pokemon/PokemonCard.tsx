import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SinglePokemon } from "../../interfaces";

interface Props {
  pokemon: SinglePokemon;
}

const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={2} key={id}>
      <Card 
        isHoverable
        isPressable
        onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            objectFit="contain"
            width="100%"
            css={{ p: 5 }}
            alt={name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b transform="capitalize">
              {name}
            </Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              #{id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
