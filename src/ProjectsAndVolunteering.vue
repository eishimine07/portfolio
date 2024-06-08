<script setup lang="ts">
import PortfolioSection from './components/PortfolioSection.vue'
import Experience from './types/experience'

const projectsAndVolunteering: Experience[] = [
  { title: 'Mentor - PoliRetribua', period: 'Março/2022 - Maio/2024', description: 'Procuro ouvir e  tentar compreender as principais dificuldades dos alunos ingressantes nos cursos de engenharia na Escola Politécnica da USP.' },
]
</script>

<template>
  <PortfolioSection title="Outras Experiências">
    <v-hover
      v-for="item in projectsAndVolunteering"
      :key="item.title"
      v-slot="{ isHovering, props }"
    >
      <v-card
        v-bind="props"
        :subtitle="item.period"
        :text="item.description"
        :title="item.title"
        :variant="isHovering ? 'tonal' : 'text'"
      />
    </v-hover>
  </PortfolioSection>
</template>
