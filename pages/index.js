import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import SecondContent from "@/components/secondContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="content-wrapper">
          <Content />
          <SecondContent />
        </div>
      </div>
    </>
  );
}
