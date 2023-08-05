/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchCompanyByName = /* GraphQL */ `
  query SearchCompanyByName($input: searchCompanyBody) {
    searchCompanyByName(input: $input) {
      currency
      exchangeShortName
      name
      stockExchange
      symbol
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExchangeCompany = /* GraphQL */ `
  query GetExchangeCompany($id: ID!) {
    getExchangeCompany(id: $id) {
      currency
      exchangeShortName
      name
      stockExchange
      symbol
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExchangeCompanies = /* GraphQL */ `
  query ListExchangeCompanies(
    $filter: ModelExchangeCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExchangeCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        currency
        exchangeShortName
        name
        stockExchange
        symbol
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
