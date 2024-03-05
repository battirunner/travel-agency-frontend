import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Loader from "./components/loader/Loader.jsx";
// import { FacebookProvider } from "react-facebook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        {/* <FacebookProvider appId={import.meta.VITE_REACT_APP_FACEBOOK_CLIENT_ID}> */}
          <GoogleOAuthProvider
            clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
          >
            <App />
          </GoogleOAuthProvider>
        {/* </FacebookProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
