<script setup lang="ts">
import CustomCard from './CustomCard.vue';
import PortfolioSection from './PortfolioSection.vue'

type Project = {
  title: string
  description: string[]
  image: string
  url: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Twinballs',
    description: [
      'Twinballs é um jogo de quebra-cabeça divertido, desenvolvido em JavaScript, onde você precisa guiar duas bolas até suas posições específicas em mapas únicos para cada nível. As bolas podem ganhar efeitos especiais que mudam a forma como se movem, adicionando um desafio extra. Cada nível apresenta desafios únicos que exigem raciocínio e estratégia para vencê-los.',
    ],
    image: '/twinballs.png',
    url: 'https://twinballs.vercel.app/',
    tags: [
      'JavaScript',
      'TypeScript',
      'Vue',
      'Tailwind',
    ],
  },
]
</script>

<template>
  <PortfolioSection title="Projetos">
    <CustomCard
      v-for="proj in projects"
      :key="proj.title"
      :title="proj.title"
      :text="proj.description"
      :image="proj.image"
      :url="proj.url"
      :tags="proj.tags"
    />
  </PortfolioSection>
</template>
