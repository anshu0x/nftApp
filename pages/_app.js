import "../styles/globals.css";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  const BaseLayout = dynamic(() => import("../components/BaseLayout"), {
    // Do not import in server side
    ssr: false,
  });

  return (
    <>
      <BaseLayout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
