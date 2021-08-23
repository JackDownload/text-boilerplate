import pkg from './package'
import info from './content/setup/info'
import path from 'path'
import glob from 'glob'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Server
  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bootstrap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ],
script: [
  { src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true },
]
},

// Global CSS: https://go.nuxtjs.dev/config-css
css: [
'@/assets/scss/style.scss',
],

// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
{ src: '~/plugins/bootstrap.client.js' }
],

// Auto import components: https://go.nuxtjs.dev/config-components
components: true,

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
buildModules: [
],

// Modules: https://go.nuxtjs.dev/config-modules
modules: [
// https://go.nuxtjs.dev/pwa
'@nuxtjs/pwa',
// https://go.nuxtjs.dev/content
'@nuxt/content',
'bootstrap-vue/nuxt',
'@nuxtjs/style-resources',
'@nuxtjs/sitemap',
'@nuxtjs/gtm',
],

// PWA module configuration: https://go.nuxtjs.dev/pwa
pwa: {
manifest: {
  lang: 'en'
}
},

// Content module configuration: https://go.nuxtjs.dev/config-content
content: {},
sitemap: {
hostname: 'https://elegant-mahavira-21b6ba.netlify.app',
gzip: true,
routes: async () => {
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles').only(['path']).fetch()
  return articles.map((p) => p.path)
}
}