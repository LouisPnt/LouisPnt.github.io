// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/LouisPnt.github.io/' // Remplacez par le nom exact de votre dépôt GitHub
    : '/'
}