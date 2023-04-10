"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import FormPost from "@/components/form-post";

async function getPosts() {
  const res = await fetch(`/api/getPosts`);

  if (!res.ok) {
    console.error("Error:", res);
  }

  return res.json();
}

type Post = {
  title: string;
  id: number;
};

const Home = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      console.log({ posts });
      setData(posts);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div>
          <FormPost />
          {data.map((post) => {
            return <h1 className="text-lg">{post.title}</h1>;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
