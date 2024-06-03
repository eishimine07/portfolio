<script setup lang="ts">
import { useDisplay } from 'vuetify'
import {
  mdiGithub,
  mdiInstagram,
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
  mdiLinkedin,
  mdiGit,
} from '@mdi/js'

type Contact = {
  icon: string
  url: string
}

type Experience = {
  title: string
  period: string
  description: string
}

type TecnologiesAndTools = {
  name: string
  icon: string
}

const contacts: Contact[] = [
  { icon: mdiGithub, url: 'https://github.com/eishimine07' },
  { icon: mdiInstagram, url: 'https://www.instagram.com/eishimine/' },
  { icon: mdiLinkedin, url: 'https://www.linkedin.com/in/erick-ishimine-981646160' },
]

const sections = [
  'Sobre Mim',
  'Habilidades',
  'Experiência Profissional',
  'Trabalho Voluntário',
  'Projetos',
]

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

const professionalExperience: Experience[] = [
  { title: 'Engenheiro de Software - Infineat', period: 'Janeiro/2024 - Presente', description: 'Participei da análise de requisitos, definição de escopo e estimativa de tempo de desenvolvimento dos projetos.' },
  { title: 'Desenvolvedor Freelancer - Infineat', period: 'Setembro/2022 - Janeiro/2024', description: 'Planejei e desenvolvi funcionalidades tanto no frontend quanto no backend da aplicação web.' },
  { title: 'Líder Técnico - Delivery Direto', period: 'Janeiro/2023 - Dezembro/2023', description: 'Participei da análise de requisitos, definição de escopo e estimativa de tempo de desenvolvimento dos projetos.' },
  { title: 'Desenvolvedor Full Stack - Delivery Direto', period: 'Agosto/2019 - Janeiro/2023' , description: 'Trabalhei no desenvolvimento de diversas funcionalidades no produto. Algumas delas foram: Programa de fidelidade; Agendamento de campanhas de e-mail e push notification; Disponibilização do Pix como meio de pagamento.' },
  { title: 'Estagiário de Desenvolvimento Web - Delivery Direto', period: 'Agosto/2018 - Agosto/2019' , description: 'Contribuí para o desenvolvimento de novas funcionalidades para os clientes finais e de uso interno.' },
]

// const volunteering: Experience[] = [
//   { title: 'Mentor - PoliRetribua', period: 'Março/2022 - Maio/2024', description: 'Procuro ouvir e  tentar compreender as principais dificuldades dos alunos ingressantes nos cursos de engenharia na Escola Politécnica da USP.' },
// ]

const { smAndDown } = useDisplay()
</script>

<template>
  <v-app>
    <v-container class="d-flex flex-column flex-md-row gc-12">
      <div v-if="!smAndDown" class="fixed-column d-flex flex-column py-16 position-sticky">
        <h1>
          Erick Minoru Ishimine
        </h1>

        <h2>
          Engenheiro de Software
        </h2>

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
        <div class="section">
          <h2>
            {{ sections[0] }}
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at lacinia tellus
          </p>

          <v-divider />
        </div>

        <v-lazy
          :min-height="250"
          :options="{'threshold':0.4}"
          transition="scroll-y-transition"
        >
          <div class="section">
            <h2>
              {{ sections[1] }}
            </h2>

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

            <v-divider />
          </div>
        </v-lazy>

        <v-lazy
          :min-height="700"
          :options="{'threshold':0.15}"
          transition="scroll-y-transition"
        >
          <div class="section">
            <h2>
              {{ sections[2] }}
            </h2>

            <v-hover
              v-for="exp in professionalExperience"
              :key="exp.title"
              v-slot="{ isHovering, props }"
            >
              <v-card
                v-bind="props"
                :subtitle="exp.period"
                :text="exp.description"
                :title="exp.title"
                :variant="isHovering ? 'tonal' : 'text'"
              />
            </v-hover>

            <v-divider />
          </div>
        </v-lazy>

        <!-- <h2>
          {{ sections[3] }}
        </h2>

        <v-hover
          v-for="exp in volunteering"
          :key="exp.title"
          v-slot="{ isHovering, props }"
        >
          <v-card
            v-bind="props"
            :subtitle="exp.period"
            :text="exp.description"
            :title="exp.title"
            :variant="isHovering ? 'tonal' : 'text'"
          />
        </v-hover>

        <v-divider /> -->

        <h2>
          {{ sections[4] }}
        </h2>
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
