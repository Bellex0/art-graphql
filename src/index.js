import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setContext } from 'apollo-link-context'
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"

// const uri = "https://metaphysics-production.artsy.net/"

// const httpLink = createHttpLink({
//   uri
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//       headers: {
//           ...headers,
//           "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWJmOWVkOTUxM2M3YTAwMTMyN2RiNzEiLCJzYWx0X2hhc2giOiI0Nzc3MDg3NzFjZDQ5ZmZiNDhlYzE4Mjg3M2U5YjYwMSIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNTk0ODAwMzQ2LCJpYXQiOjE1ODk2MTYzNDYsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZWJmOWVkYTY3M2I3YjAwMTI3MDhkZWQifQ.LwkbkNoksQBbtl8XBxUzKUwTpBhkTELX19ykyPE1OSE",
//           "x-user-id": "5ebf9ed9513c7a001327db71"
//       }
//     }
//   })
//   console.log(authLink)

  // const client = new ApolloClient({
  //     link: new HttpLink({
  //   uri: "https://metaphysics-production.artsy.net/"
  // }),
  // cache: new InMemoryCache(),
  //   request: (operation) => {
  //     operation.setContext({
  //       headers: {
  //         "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZWJmOWVkOTUxM2M3YTAwMTMyN2RiNzEiLCJzYWx0X2hhc2giOiI0Nzc3MDg3NzFjZDQ5ZmZiNDhlYzE4Mjg3M2U5YjYwMSIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwib3RwIjpmYWxzZSwiZXhwIjoxNTk0ODAwMzQ2LCJpYXQiOjE1ODk2MTYzNDYsImF1ZCI6IjVkNDA5OTZlNmU2MDQ5MDAwNzQ5MGZhMiIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZWJmOWVkYTY3M2I3YjAwMTI3MDhkZWQifQ.LwkbkNoksQBbtl8XBxUzKUwTpBhkTELX19ykyPE1OSE",
  //         "x-user-id": "5ebf9ed9513c7a001327db71"
  //       }
  //     })
  //   }
  // })

  

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://metaphysics-staging.artsy.net/"
  }),
  cache: new InMemoryCache()
})

//  const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// })



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);

