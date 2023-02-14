import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Services from "@/components/About";

export default function Home() {
  return (
    <Layout title="Home">
      <>
        <Intro />
        <Services />
      </>
    </Layout>
  );
}
