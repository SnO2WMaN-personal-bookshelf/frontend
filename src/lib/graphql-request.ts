/* eslint-disable no-process-env */
import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~~/generated/graphql-codegen/graphql-request';

export const GraphQLRequestClient = new GraphQLClient(
  process.env.GRAPHQL_API_ENDPOINT!,
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_API_BEARER_TOKEN}`,
    },
  },
);

export const GraphQLRequestSDK = getSdk(GraphQLRequestClient);
