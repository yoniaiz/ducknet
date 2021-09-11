import Head from 'next/head';
import Button from '@ui/button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="GeneratedGeneratGeneratedGeneratededGeneratedGeneratedGeneratedGeneratedGeneratedGeneratedGeneratedGeneratedGeneratedGeneratedGenerated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ margin: 20 }}>
        <Button color="primary" variant="contained">
          my button
        </Button>
      </main>
    </div>
  );
}
