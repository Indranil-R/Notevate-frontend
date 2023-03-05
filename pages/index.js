import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
      <Title />
      <Navbar />
      <Main />
    </>
  );
}
