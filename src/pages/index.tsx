import Head from "next/head";
import styles from "@/pages-styles/Home.module.css";
import TaskProgress from "@/elements/TaskProgress";

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
          <TaskProgress completed={20} tasks={10} />
        </section>
      </main>
    </>
  );
}
