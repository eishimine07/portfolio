<script setup lang="ts">
import {
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiJquery,
  mdiVuejs,
  mdiSass,
  mdiLanguagePhp,
  mdiLanguageKotlin,
  mdiLanguageRubyOnRails,
  mdiGit,
  mdiGithub,
  mdiTailwind,
  mdiResponsive,
} from '@mdi/js'
import PortfolioSection from './PortfolioSection.vue'

type SkillsAndTecnologies = {
  name: string
  icon: string
}

const skillsAndTecnologies: SkillsAndTecnologies[] = [
  { name: 'HTML5', icon: mdiLanguageHtml5 },
  { name: 'CSS3', icon: mdiLanguageCss3 },
  { name: 'JavaScript', icon: mdiLanguageJavascript },
  { name: 'TypeScript', icon: mdiLanguageTypescript },
  { name: 'jQuery', icon: mdiJquery },
  { name: 'Vue', icon: mdiVuejs },
  { name: 'SASS', icon: mdiSass },
  { name: 'Tailwind', icon: mdiTailwind },
  { name: 'Site Responsível', icon: mdiResponsive },
  { name: 'PHP', icon: mdiLanguagePhp },
  { name: 'Kotlin', icon: mdiLanguageKotlin },
  { name: 'Ruby on Rails', icon: mdiLanguageRubyOnRails },
  { name: 'Git', icon: mdiGit },
  { name: 'GitHub', icon: mdiGithub },
]
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    title="Habilidades"
  >
    <p>
      Lista de algumas habilidades e tecnologias nas quais tenho experiência
    </p>

    <div class="d-flex flex-row flex-wrap ga-4">
      <div
        v-for="item in skillsAndTecnologies"
        class="d-flex flex-column text-center"
      >
        <v-icon
          class="mx-auto"
          :icon="item.icon"
          size="64"
        />

        {{  item.name  }}
      </div>
    </div>
  </PortfolioSection>
</template>
