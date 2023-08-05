/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateExchangeCompany = /* GraphQL */ `
  subscription OnCreateExchangeCompany(
    $filter: ModelSubscriptionExchangeCompanyFilterInput
  ) {
    onCreateExchangeCompany(filter: $filter) {
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
export const onUpdateExchangeCompany = /* GraphQL */ `
  subscription OnUpdateExchangeCompany(
    $filter: ModelSubscriptionExchangeCompanyFilterInput
  ) {
    onUpdateExchangeCompany(filter: $filter) {
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
export const onDeleteExchangeCompany = /* GraphQL */ `
  subscription OnDeleteExchangeCompany(
    $filter: ModelSubscriptionExchangeCompanyFilterInput
  ) {
    onDeleteExchangeCompany(filter: $filter) {
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
