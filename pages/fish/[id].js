import { BASE_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import Head from "../../components/layout/Head";
import axios from "axios";
import Image from "next/image";
import Heading from "../../components/typography/Heading";
import Paragraph from "../../components/typography/Paragraph";

export default function Fish({ fishy }) {
  return (
    <Layout>
      <Head title={fishy.name["name-EUen"]} />
      <Container className="my-5">
        <Paragraph className="fish-name">{fishy.name[`name-EUen`].toUpperCase()}</Paragraph>
        <Heading>{fishy[`catch-phrase`]}</Heading>
        <Image src={fishy.image_uri} width={640} height={320} />

        <p>
          <span className="fw-bold" style={{ color: "#fcb86d" }}>
            Location:
          </span>{" "}
          {fishy.availability.location} |{" "}
          <span className="fw-bold" style={{ color: "#fcb86d" }}>
            Rarity:{" "}
          </span>
          {fishy.availability.rarity} |{" "}
          <span className="fw-bold" style={{ color: "#fcb86d" }}>
            Price:{" "}
          </span>
          {fishy.price}
        </p>

        <Paragraph>{fishy[`museum-phrase`]}</Paragraph>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL);

    const fish = response.data;
    const paths = fish.map((fishy) => ({
      params: {
        id: JSON.stringify(fishy.id),
      },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.id}`;
  let fishy = null;

  try {
    const response = await axios.get(url);
    fishy = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { fishy: fishy },
    };
  }
}
