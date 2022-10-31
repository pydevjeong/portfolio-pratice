import { Container,Box,Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hi, I&apos;m looking for front-end job!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ernest Copper - Jeong Hun
          </Heading>
          <p>Digital Craftzman (Artist / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}
