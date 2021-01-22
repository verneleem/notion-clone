import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'email' | 'name'>
);

export type PageInfoFragment = (
  { __typename?: 'Page' }
  & Pick<Types.Page, 'id' | 'blocks' | 'createdAt' | 'updatedAt'>
  & { creator?: Types.Maybe<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type GetPagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPagesQuery = (
  { __typename?: 'Query' }
  & { queryPage?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Page' }
    & PageInfoFragment
  )>>> }
);

export type GetPageQueryVariables = Types.Exact<{
  pageID: Types.Scalars['ID'];
}>;


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { getPage?: Types.Maybe<(
    { __typename?: 'Page' }
    & PageInfoFragment
  )> }
);

export type AddPageMutationVariables = Types.Exact<{
  page: Types.AddPageInput;
}>;


export type AddPageMutation = (
  { __typename?: 'Mutation' }
  & { addPage?: Types.Maybe<(
    { __typename?: 'AddPagePayload' }
    & { page?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Page' }
      & PageInfoFragment
    )>>> }
  )> }
);

export type UpdatePageMutationVariables = Types.Exact<{
  updatePageInput: Types.UpdatePageInput;
}>;


export type UpdatePageMutation = (
  { __typename?: 'Mutation' }
  & { updatePage?: Types.Maybe<(
    { __typename?: 'UpdatePagePayload' }
    & { page?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Page' }
      & PageInfoFragment
    )>>> }
  )> }
);

export type DeletePageMutationVariables = Types.Exact<{
  pageID: Types.Scalars['ID'];
}>;


export type DeletePageMutation = (
  { __typename?: 'Mutation' }
  & { deletePage?: Types.Maybe<(
    { __typename?: 'DeletePagePayload' }
    & { page?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Page' }
      & Pick<Types.Page, 'id'>
    )>>> }
  )> }
);

export type UpdateUserMutationVariables = Types.Exact<{
  email?: Types.Maybe<Types.Scalars['String']>;
  name: Types.Scalars['String'];
  timestamp: Types.Scalars['DateTime'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Types.Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & { user?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'User' }
      & Pick<Types.User, 'email' | 'name' | 'updatedAt'>
    )>>> }
  )> }
);

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  email
  name
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on Page {
  id
  blocks
  creator {
    ...UserInfo
  }
  createdAt
  updatedAt
}
    ${UserInfoFragmentDoc}`;
export const GetPagesDocument = gql`
    query getPages {
  queryPage(filter: {has: creator}, order: {desc: createdAt}) {
    ...PageInfo
  }
}
    ${PageInfoFragmentDoc}`;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions?: Apollo.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
        return Apollo.useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
      }
export function useGetPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
          return Apollo.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = Apollo.QueryResult<GetPagesQuery, GetPagesQueryVariables>;
export const GetPageDocument = gql`
    query getPage($pageID: ID!) {
  getPage(id: $pageID) {
    ...PageInfo
  }
}
    ${PageInfoFragmentDoc}`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      pageID: // value for 'pageID'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const AddPageDocument = gql`
    mutation addPage($page: AddPageInput!) {
  addPage(input: [$page]) {
    page {
      ...PageInfo
    }
  }
}
    ${PageInfoFragmentDoc}`;
export type AddPageMutationFn = Apollo.MutationFunction<AddPageMutation, AddPageMutationVariables>;

/**
 * __useAddPageMutation__
 *
 * To run a mutation, you first call `useAddPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPageMutation, { data, loading, error }] = useAddPageMutation({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAddPageMutation(baseOptions?: Apollo.MutationHookOptions<AddPageMutation, AddPageMutationVariables>) {
        return Apollo.useMutation<AddPageMutation, AddPageMutationVariables>(AddPageDocument, baseOptions);
      }
export type AddPageMutationHookResult = ReturnType<typeof useAddPageMutation>;
export type AddPageMutationResult = Apollo.MutationResult<AddPageMutation>;
export type AddPageMutationOptions = Apollo.BaseMutationOptions<AddPageMutation, AddPageMutationVariables>;
export const UpdatePageDocument = gql`
    mutation updatePage($updatePageInput: UpdatePageInput!) {
  updatePage(input: $updatePageInput) {
    page {
      ...PageInfo
    }
  }
}
    ${PageInfoFragmentDoc}`;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      updatePageInput: // value for 'updatePageInput'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, baseOptions);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const DeletePageDocument = gql`
    mutation deletePage($pageID: ID!) {
  deletePage(filter: {id: [$pageID]}) {
    page {
      id
    }
  }
}
    `;
export type DeletePageMutationFn = Apollo.MutationFunction<DeletePageMutation, DeletePageMutationVariables>;

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      pageID: // value for 'pageID'
 *   },
 * });
 */
export function useDeletePageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePageMutation, DeletePageMutationVariables>) {
        return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(DeletePageDocument, baseOptions);
      }
export type DeletePageMutationHookResult = ReturnType<typeof useDeletePageMutation>;
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutation>;
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<DeletePageMutation, DeletePageMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($email: String, $name: String!, $timestamp: DateTime!) {
  updateUser(input: {filter: {email: {eq: $email}}, set: {name: $name}}) {
    user {
      email
      name
      updatedAt
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;