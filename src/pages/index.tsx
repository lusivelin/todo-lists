import Head from "next/head";
import styles from "@/styles/page/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the Daily Solutions</title>
        <meta
          name="description"
          content="Cleaning services for singapore household"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Home Section */}
        <section>
          <div>Banner Image</div>

          <div>Banner Content</div>
        </section>
      </main>
    </>
  );
}
