import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export function ContactForm() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Stack direction="column" minW="lg" spacing="2rem">
        <FormControl isRequired size="lg">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" placeholder="example@mail.com" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Message</FormLabel>
          <Textarea placeholder="Leave your message here" />
        </FormControl>
        <FormControl>
          <Button variant="submitButton" size="lg" type="submit">
            Submit
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
}
