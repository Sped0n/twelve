module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('cssnano')({
      preset: 'advanced'
    })
  ]
}
