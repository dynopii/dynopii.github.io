import "../styles/globals.scss";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} /> <ToastContainer />
    </>
  );
}
export default App;
