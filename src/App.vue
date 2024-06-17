<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import {
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
} from '@mdi/js'
import AboutMe from './components/AboutMe.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyProjects from './components/MyProjects.vue'
import SkillsAndTecnologies from './components/SkillsAndTecnologies.vue'
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

const { mdAndDown, smAndUp } = useDisplay()
const avatarSize = computed(() => mdAndDown.value ? 120 : 240 )
</script>

<template>
  <MouseEffect />

  <v-app>
    <v-container class="d-flex flex-column flex-lg-row gc-12">
      <div :class="['d-flex', 'flex-row', 'flex-lg-column', 'gr-4', 'gc-8', !mdAndDown && 'fixed-column position-sticky py-16']">
        <div v-if="smAndUp" class="d-flex align-center justify-center mx-auto">
          <v-avatar :size="avatarSize">
            <v-img src="/me.png" />
          </v-avatar>
        </div>
        
        <div :class="['h-100', 'w-100']">
          <p class="text-h3 mb-1">
            Erick Ishimine
          </p>
  
          <p class="text-h5 mb-2">
            Engenheiro de Software
          </p>

          <div class="d-flex mt-4 gx-2">
            <v-btn
              v-for="contact in contacts"
              :icon="contact.icon"
              :href="contact.url"
              :ripple="false"
              variant="plain"
            />
          </div>
        </div>
      </div>

      <div :class="['content', 'py-16', 'd-flex', 'flex-column', 'ga-8', mdAndDown && 'w-100']">
        <AboutMe />

        <SkillsAndTecnologies />

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
  width: 32%;
}

.content {
  width: 68%;
}

.circle {
  height: 200px;
  width: 200px;
}
</style>
