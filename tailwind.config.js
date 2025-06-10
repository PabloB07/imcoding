module.exports = {
  content: [
    './index.html',
    './sass/**/*.scss',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        discord: {
          'primary': '#5865F2',
          'secondary': '#99AAB5',
          'dark': '#36393F',
          'darker': '#2F3136',
          'light': '#FFFFFF'
        }
      },
      backgroundImage: {
        'gradient-discord': 'linear-gradient(to right, #5865F2, #7289DA)'
      }
    }
  },
  plugins: []
}