import 'vuetify/styles'
import { ThemeDefinition, createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints/md3'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#B862D8',   // Cor Primária
    secondary: '#8D62D8', // Análogo Frio
    background: '#EAEAEA',// Fundo Branco
    surface: '#EAEAEA',// Fundo Branco
  },
}

const customDarkTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#E6BEF5',   // Cor Primária
    secondary: '#BF9BCC', // Análogo Frio
    background: '#120415',// Fundo Escuro
    surface: '#120415',// Fundo Escuro
  },
}

export default function vuetify() {
  return createVuetify({
    blueprint: md3,
    icons: {
      aliases,
      defaultSet: 'mdi',
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customLightTheme,
        customDarkTheme,
      },
    },
  }) 
}