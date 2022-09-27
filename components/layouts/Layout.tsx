import { FC } from "react";
import { Box } from "../ui";

type Props = {
  children: JSX.Element,
};

export const Layout: FC<Props> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);
