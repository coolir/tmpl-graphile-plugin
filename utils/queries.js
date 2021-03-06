import { gql } from 'graphile-test';

export const GetMetaSchema = gql`
  query MetaQuery {
    _meta {
      tables {
        name
        fields {
          name
          type {
            name
          }
        }
        constraints {
          ... on MetaschemaForeignKeyConstraint {
            fields {
              name
            }
            refTable {
              name
              fields {
                name
              }
            }
            refFields {
              name
            }
          }
          ... on MetaschemaPrimaryKeyConstraint {
            __typename
            fields {
              name
              type {
                name
              }
            }
            name
          }

          ... on MetaschemaUniqueConstraint {
            __typename
            name
            fields {
              name
              type {
                name
              }
            }
          }
          ... on MetaschemaCheckConstraint {
            __typename
            name
            fields {
              name
              type {
                name
              }
            }
          }
        }
      }
    }
  }
`;
