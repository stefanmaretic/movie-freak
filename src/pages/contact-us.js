import { Box, Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import ContactForm from "../components/contact-form";

export default function ContactUs() {
  return (
    <Layout>
      <Flex flexDirection="column" justify="center" align="center">
        <Box minW="50em" mt="5em">
          <Text align="center" fontSize="4xl" fontWeight="bold">
            Contact Us
          </Text>
          <br />
          <ContactForm />
        </Box>
      </Flex>
    </Layout>
  );
}
