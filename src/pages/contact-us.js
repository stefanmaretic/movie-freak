import { Flex, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { ContactForm } from "../components/contact-form";

export default function ContactUs() {
  return (
    <Layout>
      <Flex flexDirection="column" justify="center" align="center" gap="2rem">
        <Text align="center" fontSize="4xl" fontWeight="bold" mt="3rem">
          Contact Us
        </Text>
        <ContactForm />
      </Flex>
    </Layout>
  );
}
