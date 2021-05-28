const withTM = require('next-transpile-modules')([
  '@made/entities',
  '@made/use-cases',
])

module.exports = withTM({
  reactStrictMode: true,
})