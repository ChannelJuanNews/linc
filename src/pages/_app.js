import { StateProvider } from "../util/store";

function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default App;
