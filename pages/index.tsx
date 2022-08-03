import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Dashboard } from "../components";
import { useRouter } from "next/router";
import { shallowEqual, useSelector } from "react-redux";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} mt-3`}>
      <Dashboard />
    </div>
  );
};

export default Home;
