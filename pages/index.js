import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import { Paragraph } from "../components/paragraph";
import Layout from "../components/layouts/article";

export default function Home() {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m looking for front-end job!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ernest Copper - Jeong Hun
          </Heading>
          <p>Digital Craftzman (Artist / Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            bordercolor="whiteAlpha.800"
            borderwidth={2}
            width={100}
            height={100}
            borderstyle="solid"
            maxwidth="100px"
            display="inline-block"
            borderradius="full"
            src="/images/temp.jpg"
            alt="temp Img"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          , but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.{" "}
          <NextLink href="/works/inkdrop" legacyBehavior>
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Ann Yang, Korea
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to usin.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 👍
        </Heading>
        <Paragraph>
          Art, Music, Exercise, 
          <Link href="/">Shame God</Link>
        </Paragraph>
      </Section>
    </Container>
    </Layout>
  );
}
