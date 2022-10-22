import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Toska"}</title>
      </Head>

      <Navbar />
      <div className="pt-6 md:pt-10">{children}</div>
    </div>
  );
}
