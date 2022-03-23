import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Paragraph from "../components/typography/Paragraph";

export default function results(props) {
  return (
    <Layout>
      <Head title="Results" />

      <Container className="mb-5">
        <Heading className="mb-2 mt-5">Results</Heading>
        <Paragraph>Here are some fishy stuff.</Paragraph>

        <Row className="g-5 gy-5 mt-3">
          {props.fish.map((fishy) => {
            return (
              <Col sm={6} lg={3} key={fishy.id}>
                <Card>
                  <a className="card-link" href={`fish/${fishy.id}`}>
                    <Card.Body>
                      <Image variant="top" src={fishy.image_uri} width={286} height={190} />
                      <Card.Text>{fishy.name["name-EUen"]}</Card.Text>
                      <Paragraph className="phrase">{fishy[`catch-phrase`]}</Paragraph>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  let fish = [];

  try {
    const response = await axios.get(BASE_URL);
    fish = response.data;
    console.log(fish);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      fish: fish,
    },
  };
}
