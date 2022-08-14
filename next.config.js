/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  serverRuntimeConfig: {
    apiURL: 'http://kanban-backend:3000/api/graphql'
  },
  publicRuntimeConfig: {
    apiURL: 'http://localhost:3000/api/graphql'
  }
}
