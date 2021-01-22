import App from "next/app";
import { ApolloProvider } from "@apollo/client"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"

import UserProvider from "../context/UserContext";
import Layout from "../components/layout";

import "typeface-nunito-sans";
import "typeface-roboto";
import "../shared/global.scss";
import { useApollo } from "../lib/apolloClient";

const MyApp = ({ Component, pageProps }) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0()
  const apolloClient = useApollo(pageProps.initialApolloState, isAuthenticated ? getIdTokenClaims : null);
  return (
    <UserProvider isAuthenticated={isAuthenticated}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
};

const AuthLoadingWrapper = (props) => {
  const { isLoading } = useAuth0()
  if (isLoading) return <></>
  return <MyApp {...props} />
}

const Auth0Wrapper = (props) => {
  return (
    <Auth0Provider
      domain="dev-93kebfjs.us.auth0.com"
      clientId="eaNlZ3Hi019Ty8kfJ1cZ8iL4abmpZP24"
      cacheLocation="localstorage"
    >
      <AuthLoadingWrapper {...props} />
    </Auth0Provider>
  )
}

Auth0Wrapper.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);
  return { ...appProps };
};

export default Auth0Wrapper;
