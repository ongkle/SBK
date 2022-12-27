//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import MyCollection from "./MyCollection";
import myNFTs from "../mock/nftData";
import React, { useState } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";

import "@fontsource/iceberg";
const MyNFTs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SimpleGrid
        columns={6}
        spacing={4}
        justify={"center"}
        align={"center"}
        my={"60px"}
      >
        {myNFTs
          .filter((games) => {
            if (searchTerm == "") {
              return games;
            } else if (
              games.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return games;
            }
          })
          .map((games) => (
            <MyCollection games={games} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default MyNFTs;
