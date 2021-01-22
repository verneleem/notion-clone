import { useMemo } from "react";
import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

let apolloClient;

function createApolloClient(getIdTokenClaims) {
  const endpoint =
    "https://loutish-shirt.us-west-2.aws.cloud.dgraph.io/graphql";
  const inMemoryCacheConfig = {
    typePolicies: {
      User: {
        keyFields: ["email"],
      },
    },
  };
  if (getIdTokenClaims == null)
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: new HttpLink({
        uri: endpoint,
      }),
      cache: new InMemoryCache(inMemoryCacheConfig),
    });
  const httpLink = createHttpLink({
    uri: endpoint,
  });
  const authLink = setContext(async (request, { headers }) => {
    const idTokenClaims = await getIdTokenClaims();
    return {
      headers: {
        ...headers,
        auth: idTokenClaims.__raw,
      },
    };
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(inMemoryCacheConfig),
  });
}

export function initializeApollo(initialState = null, getIdTokenClaims) {
  const _apolloClient = apolloClient ?? createApolloClient(getIdTokenClaims);
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState, getIdTokenClaims) {
  const store = useMemo(
    () => initializeApollo(initialState, getIdTokenClaims),
    [initialState, getIdTokenClaims]
  );
  return store;
}
