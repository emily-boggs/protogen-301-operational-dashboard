import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'seiTheme',
    themes: {
      seiTheme: {
        dark: false,
        colors: {
          primary: '#0E7490',
          secondary: '#EA580C',
          accent: '#F59E0B',
          background: '#F5F6FA',
          surface: '#FFFFFF',
          'on-surface': '#1C2536',
          'on-background': '#1C2536',
          success: '#2E7D32',
          warning: '#E65100',
          error: '#C62828',
          info: '#0E7490',
        },
      },
    },
  },
})
