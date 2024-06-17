<script setup lang="ts">
import PortfolioSection from './PortfolioSection.vue'

const description = [
  'Sou engenheiro de software por profissão, mas engenheiro eletricista por formação. Minha jornada na programação começou durante o curso de engenharia na Escola Politécnica da USP, e apesar de um início desafiador, desenvolvi uma verdadeira paixão pela área.',
  'Acho fascinante ver como uma sequência de letras e números pode se transformar em aplicações com interfaces belas que proporcionam uma experiência incrível para os usuários.',
  'Gosto de pensar também na experiência dos outros desenvolvedores ao trabalharmos juntos no mesmo projeto. Então, código limpo, acessível e bem testado são pontos importantes para mim, além do compartilhamento de conhecimento com o time.',
  'Trabalhar na criação de soluções de software, onde cada projeto possui seus requisitos específicos, me motiva a evoluir cada vez mais como profissional.',
]
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    title="Sobre Mim"
  >
    <p v-for="p in description">
      {{ p }}
    </p>
  </PortfolioSection>
</template>
