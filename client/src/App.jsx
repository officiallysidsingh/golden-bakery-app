// React And React Router Imports
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Apollo Client Imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Redux Imports
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

// AppRouter Page Import
import AppRouter from "./AppRouter.jsx";

function App() {
  // Made An Instace Of Apollo Client
  // To Pass To Apollo Provider
  const client = new ApolloClient({
    uri: `${import.meta.env.VITE_APP_SERVER_URI}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <AppRouter />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
