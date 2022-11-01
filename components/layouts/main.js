import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

const Main=({children,router})=>{
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Ernest Copper - HomePage</title>
      </Head>
      <Navbar path={router.asPath}/>
      {/* 여기 주석처리 했더니 hydration 에러 사라짐 원인 찾기 */}
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main