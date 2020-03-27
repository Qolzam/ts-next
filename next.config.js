const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const webpack = require('webpack');
const withImages = require('next-images')

const nextConfig = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/people': { page: '/people' },
      '/search': { page: '/search' },
    }
  },
  webpack: config => {
    config.resolve.alias['~'] = path.join(path.resolve(__dirname), "src");
    return config;
}
}

const pluginsWrapper = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }]
], nextConfig)

module.exports = withOffline(withImages(nextConfig))

