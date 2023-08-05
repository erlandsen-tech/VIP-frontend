/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createExchangeCompany = /* GraphQL */ `
  mutation CreateExchangeCompany(
    $input: CreateExchangeCompanyInput!
    $condition: ModelExchangeCompanyConditionInput
  ) {
    createExchangeCompany(input: $input, condition: $condition) {
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
export const updateExchangeCompany = /* GraphQL */ `
  mutation UpdateExchangeCompany(
    $input: UpdateExchangeCompanyInput!
    $condition: ModelExchangeCompanyConditionInput
  ) {
    updateExchangeCompany(input: $input, condition: $condition) {
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
export const deleteExchangeCompany = /* GraphQL */ `
  mutation DeleteExchangeCompany(
    $input: DeleteExchangeCompanyInput!
    $condition: ModelExchangeCompanyConditionInput
  ) {
    deleteExchangeCompany(input: $input, condition: $condition) {
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
