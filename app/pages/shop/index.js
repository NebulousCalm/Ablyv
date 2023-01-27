import Head from 'next/head';

export default function Shop(){
  return(
    <>
      <Head>
        <title>Ablyv - Shop</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <button class="material-symbols-outlined shop-icon">shopping_cart_checkout</button>
      </main>
    </>
  )
}