import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ablyv - Home</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">
						Next.js!</a> integrated with{" "}
					<a href="https://mui.com/">Material-UI!</a>
				</h1>
				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>
						pages/index.js</code>
				</p>

			</main>
		</div>
	);
}
