// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Heading, Button, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Welcome to Your Blank Canvas
        </Heading>
        <Text fontSize="lg">Chat with the agent to start making edits and bring your ideas to life.</Text>
        <Box boxSize="sm">
          <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
        </Box>
        <Button colorScheme="teal" size="lg">
          Start Chatting
        </Button>
        <Link href="https://chakra-ui.com" isExternal color="teal.500">
          Learn more about Chakra UI
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
