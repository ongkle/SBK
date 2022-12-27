import React from "react";
import { Box, Heading, Text, Stack, Image, Button } from "@chakra-ui/react";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <button style={{ fontSize: "20px", paddingLeft: "50px" }} onClick={handleClick}>
        내 NFT
      </button>
      <button style={{ fontSize: "20px" ,paddingLeft: "30px" }}  onClick={handleClick}>
        거래내역
      </button>
    </div>
  );
}

export default App;

