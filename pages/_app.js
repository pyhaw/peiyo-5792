import "../styles/globals.css";
import { FirebaseContextProvider } from "@/context/firebase-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FirebaseContextProvider>
        <Component {...pageProps} />
      </FirebaseContextProvider>
    </>
  );
}
