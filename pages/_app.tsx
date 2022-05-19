import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  store.subscribe(() => console.log(store.getState()));

  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
