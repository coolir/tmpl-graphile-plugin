import '../utils/env';
import { GraphQLTest, env, snapshot } from 'graphile-test';
import { GetMetaSchema } from '../utils/queries';
import { PgMetaschemaPlugin } from '../src';

const { SCHEMA } = env;

const getDbString = () =>
  `postgres://${env.PGUSER}:${env.PGPASSWORD}@${env.PGHOST}:${env.PGPORT}/${env.PGDATABASE}`;

const { setup, teardown, graphQL } = GraphQLTest(
  {
    appendPlugins: [PgMetaschemaPlugin],
    schema: SCHEMA,
    graphqlRoute: '/graphql'
  },
  getDbString()
);

beforeAll(async () => {
  await setup();
});
afterAll(async () => {
  await teardown();
});

it('works', async () => {
  await graphQL(async (query) => {
    const data = await query(GetMetaSchema);
    expect(snapshot(data)).toMatchSnapshot();
  });
});
