<script setup lang="ts">
import getImageUrl from '../helpers/getImageUrl'
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
      'Twinballs é um divertido jogo de quebra-cabeça desenvolvido em JavaScript, no qual você precisa guiar duas bolas até posições específicas no tabuleiro. As bolas podem adquirir efeitos especiais que alteram a maneira como se movem, adicionando um desafio extra. Cada nível apresenta desafios únicos que exigem raciocínio e estratégia para serem superados.',
    ],
    image: getImageUrl('twinballs.png'),
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
