import { Container } from "react-bootstrap";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import Paragraph from "../components/typography/Paragraph";

export default function aboutUs() {
  return (
    <Layout>
      <Head title="About us" />
      <Container>
        <Heading>About us</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Container>
    </Layout>
  );
}
