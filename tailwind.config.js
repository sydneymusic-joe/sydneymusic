module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,cjs}'],
	safelist: [
		'bg-ruby'
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: '#000',
							'&:hover': {
								color: '#e02020'
							}
						}
					}
				}
			},
			screens: {
				xs: '480px'
			},
			fontFamily: {
				sans: ['Instrument Sans', `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`],
				serif: ['Instrument Serif', `"Superclarendon, 'Bookman Old Style', 'Sitka Heading', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif"`],
			},
			fontSize: {
				xl: '1.375rem'
			},
			colors: {
				ruby: '#e02020',
				graphite: '#6d7278',
				acknowledgement: '#BEBEBE',
				pill: '#666666',
				pjforest:'#344A2F',
				backgroundDark: '#221F20',
				gray: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					400: '#bdbdbd',
					500: '#9e9e9e',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121'
				}
			},
			aspectRatio: {
				'3/1': '3/1',
				banner: '7/1',
				'banner-small': '4/1'
			},
			gridTemplateColumns: {
				'sidebar-right': '1fr 220px',
				'sidebar-right-wide': '1fr 320px',
				'sidebar-left-wide': '320px 1fr'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
