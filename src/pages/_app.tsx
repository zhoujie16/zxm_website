import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import {
  ajax_column_queryWithClient,
  ajax_config_queryByClient,
} from "@/utils/apiTools";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
App.getInitialProps = async () => {
  const allColumn = await ajax_column_queryWithClient();
  const appConfig = await ajax_config_queryByClient();
  const pageProps = { allColumn, appConfig };
  return {
    pageProps,
  };
};

export default wrapper.withRedux(App);
