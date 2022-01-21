import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function ContactForm() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" placeholder="example@mail.com" />
      </FormControl>
      <br />
      <FormControl isRequired>
        <FormLabel htmlFor="email">Message</FormLabel>
        <Textarea placeholder="Here is a sample placeholder" />
      </FormControl>
      <br />
      <FormControl>
        <Button size="lg" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
}
