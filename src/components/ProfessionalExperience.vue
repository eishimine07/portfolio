<script setup lang="ts">
import { useDisplay } from 'vuetify'
import PortfolioSection from './PortfolioSection.vue'
import { computed } from 'vue';

type Experience = {
  title: string
  period: string
  description: string
  image: string
  url: string
}

const experiences: Experience[] = [
  {
    title: 'Engenheiro de Software - Infineat',
    period: 'Janeiro/2024 - Presente',
    description: 'Participei da análise de requisitos, definição de escopo e estimativa de tempo de desenvolvimento dos projetos.',
    image: '/infineat.png',
    url: 'https://www.infineat.com.br/',
  },
  {
    title: 'Líder Técnico - Delivery Direto',
    period: 'Janeiro/2023 - Dezembro/2023',
    description: 'Desenvolvimento de uma plataforma de entrega white label, abrangendo desde a aplicação/web até o website para gerenciamento do negócio de restaurantes. Tenho participado de vários projetos, incluindo: Manutenção e melhoria em sistema legado construído com CakePHP e JQuery; Implementação e integração de novas funcionalidades construídas em Flutter no sistema legado, através de WebView; Manutenção e desenvolvimento de um novo sistema de gerenciamento construído com Nuxt.js para substituir o sistema legado; Integração com pagamentos online via Stripe e Vindi.',
    image: '/deliverydireto.png',
    url: 'https://site.deliverydireto.com.br/',
  },
  {
    title: 'Mentor - PoliRetribua',
    period: 'Março/202s2 - Maio/2024',
    description: `O Projeto PoliRetribua é formado por um grupo de profissionais voluntários dedicados a apoiar e fortalecer estudantes em condições de vulnerabilidade socioeconômica da Escola Politécnica da USP. O objetivo é garantir a permanência desses estudantes na universidade até a conclusão da graduação, por meio de mentorias e bolsas de estudo, ajudando a evitar a evasão escolar.\nComo mentor voluntário, tive a oportunidade de orientar alguns alunos a enfrentar os desafios iniciais do curso, dando dicas sobre como organizar a rotina de estudos e encontrar o método de aprendizado que mais funciona para cada um. Além disso, procurava mostar a importância de aproveitar ao máximo o ambiente universitário, participando de grupos de extensão, conhecendo outros institutos e praticando esportes.`,
    image: '/poliretribua.png',
    url: 'https://poliretribua.org.br/',
  },
]

const { mdAndUp } = useDisplay()

const imgSize = computed(() => ({
  height: mdAndUp ? 120 : 90,
  width: mdAndUp ? 160 : 120,
}))
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    title="Experiência"
  >
    <v-hover
      v-for="exp in experiences"
      :key="exp.title"
      v-slot="{ isHovering, props }"
    >
      <v-card
        v-bind="props"
        :class="['card', isHovering && 'fade-border']"
        variant="outlined"
      >
        <div class="d-flex">
          <div>
            <v-card-title>
              {{ exp.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ exp.period }}
            </v-card-subtitle>

            <v-card-text>
              {{ exp.description }}
            </v-card-text>
          </div>
          
          <div class="ma-3 rounded bg-white pa-4 ma-auto">
            <a
              :href="exp.url"
              target="_blank"
            >
              <v-img
                height="120"
                :src="exp.image"
                width="160"
              />
            </a>
          </div>
        </div>
      </v-card>
    </v-hover>
  </PortfolioSection>
</template>


<style scoped>
.card {
  border-color: transparent;
  transition: border-color 0.3s ease-out;

  &.fade-border {
    border-color: rgba(234, 234, 234, 0.5);
  }
}
</style>