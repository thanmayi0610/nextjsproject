import { Box,Flex,Container,Heading,Text, Button } from "@radix-ui/themes";

const Rootpage= () => {
  return <Box style={{
    marginTop:"128px",
    marginBottom:"128px",
  }}>
    <Container>
      <Box style={{
       border:"1px ",
       borderStyle:"dashed",
        borderColor:"gray.gray6",
      }}> </Box>
      <Flex direction="column" align="center" ></Flex>
      <Heading align="center" size="9" style={{
        padding:"24px"
      }}>React Framework for the web</Heading>
      <Box as="div"
      style={{
        borderBottom:"1px",
        borderBottomStyle:"dashed",
        borderBottomColor:"gray.gray6",
        width:"100%",

      }}></Box>
        <Text align="center" style={{
        padding:"24px"
      }}>Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</Text>
        <Flex direction="row" align="center" gap="4">
          <Button>Get Started</Button>
          <Button variant="soft">Learn</Button>
          </Flex>
         
    </Container>
  </Box>;
};
export default Rootpage;  