import {
  useQuery,
  gql,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// import { GET_POKEMONS_BY_PAGE } from "./constant";

export const graphQlUrl = process.env.REACT_APP_GRAPHQL_API;

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`graphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

// const getPokemonsByPage = async (page = 1, limit = 20) => {
//   let offset = (page - 1) * limit;

//   const queryResult = await axios.get(graphQlUrl, {
//     query: GET_POKEMONS_BY_PAGE,
//     variables: { limit: limit, offset: offset },
//   });
//   console.log(queryResult);
//   return queryResult.data;
// };

const GET_POKEMONS_BY_PAGE = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export { client, GET_POKEMONS_BY_PAGE };
