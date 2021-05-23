const withTM = require('next-transpile-modules')([
  '@made/use-cases',
])

module.exports = withTM({
  reactStrictMode: true,
})