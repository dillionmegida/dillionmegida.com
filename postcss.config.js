module.exports = {
  plugins: [
    require(`precss`),
    require(`tailwindcss`)(`./src/styles/global.`),
    require(`autoprefixer`)()
  ],
}
