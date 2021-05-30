const withTM = require('next-transpile-modules')([
  '@made/entities',
  '@made/use-cases',
  '@made/presentation'
])

module.exports = withTM({
  reactStrictMode: true,
})