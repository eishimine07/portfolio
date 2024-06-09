<script setup lang="ts">
import { useDisplay } from 'vuetify'
import {
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
} from '@mdi/js'
import AboutMe from './components/AboutMe.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyProjects from './components/MyProjects.vue'
import TecnologiesAndTools from './components/TecnologiesAndTools.vue'
import MouseEffect from './components/MouseEffect.vue'

type Contact = {
  icon: string
  url: string
}

const contacts: Contact[] = [
  { icon: mdiGithub, url: 'https://github.com/eishimine07' },
  { icon: mdiInstagram, url: 'https://www.instagram.com/eishimine/' },
  { icon: mdiLinkedin, url: 'https://www.linkedin.com/in/erick-ishimine-981646160' },
]

const { smAndDown } = useDisplay()
</script>

<template>
  <MouseEffect />

  <v-app>
    <v-container class="d-flex flex-column flex-md-row gc-12">
      <div v-if="!smAndDown" class="fixed-column d-flex flex-column py-16 position-sticky">
        <p class="text-h3 mb-2">
          Erick Ishimine
        </p>

        <p class="text-h5 mb-2">
          Engenheiro de Software
        </p>

        <div class="d-flex mt-auto gx-2">
          <v-btn
            v-for="contact in contacts"
            :icon="contact.icon"
            :href="contact.url"
            :ripple="false"
            variant="plain"
          />
        </div>
      </div>

      <div v-if="smAndDown" class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus, at fermentum neque. Proin imperdiet tristique risus, non mollis leo aliquam in. Vestibulum sem ante, facilisis sed arcu et, tincidunt blandit ante. Nullam nec quam vitae lacus fermentum porttitor quis ut turpis. Fusce sed enim vitae dolor laoreet rhoncus quis non lacus. Ut non dignissim metus. Fusce sit amet erat sollicitudin, pharetra risus id, condimentum dolor. Aliquam tincidunt, purus et porttitor cursus, urna urna commodo arcu, vel vehicula nulla velit vel turpis. Duis feugiat posuere est non tempus.
      </div>

      <div :class="['content', 'py-16', 'd-flex', 'flex-column', 'ga-8', smAndDown && 'w-100']">
        <AboutMe />

        <TecnologiesAndTools />

        <ProfessionalExperience />

        <MyProjects />
      </div>
    </v-container>
  </v-app>
</template>

<style scoped>
.fixed-column {
  height: calc(100vh - 32px);
  top: 16px;
  width: 43%;
}

.content {
  width: 57%;
}
</style>
