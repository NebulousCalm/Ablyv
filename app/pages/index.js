import Head from 'next/head';
import Link from 'next/link';


export default function Home() {  
  return (
    <>
      <Head>
        <title>Ablyv - Home</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Link href="/shop"><button class="material-symbols-outlined shop-icon">shopping_cart</button>
</Link></main>
    </>
  )
}
