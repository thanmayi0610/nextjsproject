import { Box,Flex,Container,Heading,Text } from "@radix-ui/themes";

const Rootpage= () => {
  return <Box> 
    <Container>
      <Flex direction="column" align="center"></Flex>
      <Heading align="center">React Framework for the web</Heading>
        <Text align="center">Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</Text>

    </Container>
  </Box>;
};
export default Rootpage;