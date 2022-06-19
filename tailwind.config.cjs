module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,cjs}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#000',
              '&:hover': {
                color: '#e02020',
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans Condensed', 'sans-serif'],
      },
      fontSize: {
        xl: '1.375rem',
      },
      colors: {
        ruby: "#e02020",
        graphite: "#6d7278",
        acknowledgement : '#BEBEBE',
      },
      aspectRatio : {
        '3/1': "3/1",
        "banner": "7/1",
        "banner-small": "4/1"
      },
      gridTemplateColumns: {
        "sidebar-right": "1fr 220px",
        "sidebar-right-wide": "1fr 320px",
        "sidebar-left-wide": "320px 1fr",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
