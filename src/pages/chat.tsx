/* eslint-disable react-hooks/exhaustive-deps */

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Wrapper from "@/lib/components/appWrapper";
import { Spinner } from "../lib/components/spinner";
import { ChatInterface } from "@/lib/components/chatInterface";
import serverSidePropsWithAuth from "../utils/server_side_props_with_auth";

export default function Home({
  session,
}: {
  session: { email: string; authToken: string };
}) {
  const router = useRouter();
  const [loading, updateLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await Auth.currentAuthenticatedUser();
  //       updateLoading(false);
  //     } catch (e) {
  //       router.push("/");
  //     }
  //   })();
  // }, []);

  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Ningi playground Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {loading && <Spinner />}
        <ChatInterface session={session} />
      </Wrapper>
    </>
  );
}
export const getServerSideProps = serverSidePropsWithAuth({ redirect: true });
