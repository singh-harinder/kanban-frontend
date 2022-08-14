import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";
import type { IncomingHttpHeaders } from "http";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// const NEXT_PUBLIC_DEVELOPMENT_ENDPOINT = process.env.NEXT_PUBLIC_DEVELOPMENT_ENDPOINT;
// const NEXT_PUBLIC_PRODUCTION_ENDPOINT = process.env.NEXT_PUBLIC_PRODUCTION_ENDPOINT;
const NEXT_PUBLIC_DEVELOPMENT_ENDPOINT = serverRuntimeConfig.apiURL || publicRuntimeConfig.apiURL;
const NEXT_PUBLIC_PRODUCTION_ENDPOINT = serverRuntimeConfig.apiURL || publicRuntimeConfig.apiURL;

function createClient({ headers, initialState }: { headers?: IncomingHttpHeaders | undefined; initialState?: any }) {
  return new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
          );
        if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri:
          process.env.NODE_ENV === "development" ? NEXT_PUBLIC_DEVELOPMENT_ENDPOINT : NEXT_PUBLIC_PRODUCTION_ENDPOINT,
        fetchOptions: {
          credentials: "include",
        },
        headers,
      }),
    ]),
    cache: new InMemoryCache({}).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
