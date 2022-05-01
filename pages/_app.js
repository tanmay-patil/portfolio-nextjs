import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
