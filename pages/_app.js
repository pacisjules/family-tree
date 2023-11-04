import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import Layout from "../app/layouts/Layout.js";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps, session }) {
  const router = useRouter();

  if (router.pathname === "/AccountCreate" || router.pathname === "/questionnaire/Intro" || router.pathname === "/questionnaire/AddNames" || router.pathname === "/questionnaire/AddGender"  || router.pathname === "/questionnaire/AddBorn" || router.pathname === "/questionnaire/AddBornPlace"|| router.pathname === "/questionnaire/parents/AddFather"|| router.pathname === "/questionnaire/parents/AddMother") {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
         
            <NextNProgress
              color="orange"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />

            <Component {...pageProps} />
         
        </Provider>
      </SessionProvider>
    );
  } else {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <NextNProgress
              color="green"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    );
  }
}
