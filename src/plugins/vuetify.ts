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
          primary: '#42A5F5',
          secondary: '#FF8A65',
          accent: '#FF6D00',
          background: '#E3F2FD',
          surface: 'rgba(255, 255, 255, 0.25)',
          'on-surface': '#1A237E',
          'on-background': '#1A237E',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#F44336',
          info: '#42A5F5',
        },
      },
    },
  },
})
