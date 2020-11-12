module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,

    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_AUDIENCE: process.env.NEXT_PUBLIC_AUDIENCE,
  },
};
