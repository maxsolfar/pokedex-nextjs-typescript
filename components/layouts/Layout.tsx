import Head from "next/head";
import { FC } from "react";
import { Box, MenuNavBar } from "../ui";

type Props = {
  children: JSX.Element,
};

export const Layout: FC<Props> = ({ children }) => (
  <> 
    <Head>
      <title>PokeNext App</title>
      <meta name="author" content="Máximo Solis Farfan"/>
      <meta name="description" content="Pokemon's Detail"/>
      <meta name="keywords" content="pokemon, pokedex"/>
    </Head>
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <MenuNavBar/>
      {children}
    </Box>
  </>
);
