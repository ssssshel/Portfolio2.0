import Head from "next/head";

export default function Header({ title, description }: { title: string, description: string | undefined }): JSX.Element {
  return (
    <Head>
      <title>ssssshel | {title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
