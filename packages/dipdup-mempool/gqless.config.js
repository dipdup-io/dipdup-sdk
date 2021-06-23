/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
 const config = {
    enumsAsStrings: false,
    react: true,
    scalarTypes: { DateTime: 'string' },
    preImport: '',
    introspection: {
      endpoint: 'https://api.dipdup.net/mempool/graphql',
      headers: {},
    },
    destination: './src/gqless/index.ts',
    subscriptions: false,
  };
  
  module.exports = config;