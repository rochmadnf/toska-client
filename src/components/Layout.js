import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { authUserState } from "../store/authentication";
import Navbar from "./Navbar";

export default function Layout({ title, children, middleware = "guest" }) {
  const { replace } = useRouter();
  const authUser = useRecoilValueLoadable(authUserState);

  useEffect(() => {
    if (
      middleware === "guest" &&
      authUser.state === "hasValue" &&
      authUser.contents
    ) {
      replace("/dashboard");
    }

    if (middleware === "auth" && authUser.contents == null) {
      replace("/login");
    }
  }, [authUser.contents]);
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
