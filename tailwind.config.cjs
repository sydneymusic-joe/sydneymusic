module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,cjs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans Condensed', 'sans-serif'],
      },
      fontSize: {
        xl: '1.375rem',
      },
      colors: {
        ruby: "#e02020",
        graphite: "#6d7278",
      },
      aspectRatio : {
        '3/1': "3/1",
        "banner": "7/1"
      },
      gridTemplateColumns: {
        "sidebar-right": "1fr 220px",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
