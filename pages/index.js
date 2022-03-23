import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import Paragraph from "../components/typography/Paragraph";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <Head title="This is title" />
      <Heading className="mb-2 mt-5">Hello</Heading>
      <Paragraph>Please click the button</Paragraph>
      <div className="btn btn-primary">
        <Link href="/results">Fishy stuff</Link>
      </div>
    </Layout>
  );
}
