import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8000/graphql", // Replace with your NestJS GraphQL endpoint
    credentials: "same-origin", // or 'include' if you need to send cookies
  }),
  cache: new InMemoryCache(),
});

export default client;
