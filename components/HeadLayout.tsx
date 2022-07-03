import Head from "next/head";

export default function HeadLayout({ title, description }: { title: string, description: string | undefined }): JSX.Element {
  return (
    <Head>
      {/* <meta charSet="UTF-8" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>ssssshel | {title}</title>
    </Head>
  );
}
