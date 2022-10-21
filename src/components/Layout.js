import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Toska"}</title>
      </Head>

      {children}
    </div>
  );
}
