import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeUIProvider } from "theme-ui";
import theme from "../lib/theme";
import { Poppins, Roboto } from "next/font/google";
import { Provider } from "react-redux"; //@ts-ignore
import { configureStore, compose } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "../store/reducers";
import { rootSaga } from "../store/sagas/index";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
});

const sagaMiddleware = createSagaMiddleware();

const composer =
  typeof window !== "undefined" // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeUIProvider theme={theme}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeUIProvider>
    </Provider>
  );
}
