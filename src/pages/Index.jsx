import { useState } from "react";
import { Box, Button, Container, Input, Textarea, VStack, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) return;

    // Simulating an API call to GPT-3.5 Turbo
    const simulatedApiResponse = `This is a simulated response for the prompt: "${prompt}"`;
    setResponse(simulatedApiResponse);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Text fontSize="2xl" fontWeight="bold">
          GPT-3.5 Turbo Prompter <FaRobot />
        </Text>
        <Textarea value={prompt} onChange={handleInputChange} placeholder="Enter your prompt here..." size="lg" />
        <Button colorScheme="blue" onClick={handleSubmit} leftIcon={<FaRobot />}>
          Get Response
        </Button>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
          <Text fontWeight="bold">Response:</Text>
          <Text mt={2}>{response}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
