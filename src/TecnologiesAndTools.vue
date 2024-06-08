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
} from '@mdi/js'
import PortfolioSection from './components/PortfolioSection.vue'

type TecnologiesAndTools = {
  name: string
  icon: string
}

const tecnologiesAndTools: TecnologiesAndTools[] = [
  { name: 'HTML5', icon: mdiLanguageHtml5 },
  { name: 'CSS3', icon: mdiLanguageCss3 },
  { name: 'JavaScript', icon: mdiLanguageJavascript },
  { name: 'TypeScript', icon: mdiLanguageTypescript },
  { name: 'jQuery', icon: mdiJquery },
  { name: 'Vue', icon: mdiVuejs },
  { name: 'SASS', icon: mdiSass },
  { name: 'PHP', icon: mdiLanguagePhp },
  { name: 'Kotlin', icon: mdiLanguageKotlin },
  { name: 'Ruby on Rails', icon: mdiLanguageRubyOnRails },
  { name: 'Git', icon: mdiGit },
]
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    :min-height="250"
    title="Habilidades"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
    </p>

    <div class="d-flex flex-row flex-wrap ga-4">
      <div
        v-for="item in tecnologiesAndTools"
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
