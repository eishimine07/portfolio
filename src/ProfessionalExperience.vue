<script setup lang="ts">
import PortfolioSection from './components/PortfolioSection.vue'
import Experience from './types/experience'

const professionalExperience: Experience[] = [
  { title: 'Engenheiro de Software - Infineat', period: 'Janeiro/2024 - Presente', description: 'Participei da análise de requisitos, definição de escopo e estimativa de tempo de desenvolvimento dos projetos.' },
  { title: 'Desenvolvedor Freelancer - Infineat', period: 'Setembro/2022 - Janeiro/2024', description: 'Planejei e desenvolvi funcionalidades tanto no frontend quanto no backend da aplicação web.' },
  { title: 'Líder Técnico - Delivery Direto', period: 'Janeiro/2023 - Dezembro/2023', description: 'Participei da análise de requisitos, definição de escopo e estimativa de tempo de desenvolvimento dos projetos.' },
  { title: 'Desenvolvedor Full Stack - Delivery Direto', period: 'Agosto/2019 - Janeiro/2023' , description: 'Trabalhei no desenvolvimento de diversas funcionalidades no produto. Algumas delas foram: Programa de fidelidade; Agendamento de campanhas de e-mail e push notification; Disponibilização do Pix como meio de pagamento.' },
  { title: 'Estagiário de Desenvolvimento Web - Delivery Direto', period: 'Agosto/2018 - Agosto/2019' , description: 'Contribuí para o desenvolvimento de novas funcionalidades para os clientes finais e de uso interno.' },
]
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    :min-height="700"
    title="Experiência Profissional"
  >
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
  </PortfolioSection>
</template>
