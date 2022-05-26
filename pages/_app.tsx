import type { AppProps } from "next/app";

import "./_app.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
