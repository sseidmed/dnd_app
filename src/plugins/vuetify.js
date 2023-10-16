import { createVuetify } from "vuetify"
import "vuetify/styles"

import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css"

export default createVuetify({
  ssr: true,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})