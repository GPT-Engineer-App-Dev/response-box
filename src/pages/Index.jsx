import { useState } from "react";
import { Box, Button, Container, Textarea, VStack, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import { create } from "../../lib/openai";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) return;

    const response = await create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      setResponse(response.data.choices[0].message.content);
    } else {
      setResponse("Failed to fetch response.");
    }
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
