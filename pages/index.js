import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/atoms/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!!</a>
        </h1>
        <p>Hello</p>
        <Button text="Click me!" color="#0070F3" />
      </main>
    </div>
  );
}
