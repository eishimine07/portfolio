<script setup lang="ts">
import PortfolioSection from './PortfolioSection.vue'
import CustomCard from './CustomCard.vue'

type Experience = {
  title: string
  subtitle?: string[]
  description: string[]
  image: string
  url: string
  tags?: string[]
}

const experiences: Experience[] = [
  {
    title: 'Engenheiro de Software - Infineat (2022 - Atual)',
    subtitle: [
      'Desenvolvedor full stack freelancer',
    ],
    description: [
      'Primeira filantech do Brasil, a Infineat é a conecta supermercados e ONGs para ajudar a redirecionar alimentos que seriam desperdiçados para quem mais precisa. Além de combater a fome diariamente, coletamos todos os dados da operação para medir o impacto ESG gerado.',
      'Como desenvolvedor freelancer, trabalhei na correção de bugs e implementei diversas melhorias na plataforma de coleta de dados.',
      'No meu papel atual como engenheiro de software, sou responsável pela parte de tecnologia, ajudando a manter e propondo os próximos passos da equipe. Além disso, trabalho próximo aos outros times da empresa e busco identificar e implementar automatizações nos processos internos.'
    ],
    image: '/infineat.png',
    url: 'https://www.infineat.com.br/',
    tags: [
      'JavaScript',
      'TypeScript',
      'Vue',
      'Tailwind',
      'Ruby on Rails',
    ],
  },
  {
    title: 'Líder técnico - Delivery Direto (2018 - 2023)',
    subtitle: [
      'Desenvolvedor full stack',
      'Estagiário de desenvolvimento web',
    ],
    description: [
      'A Delivery Direto é uma empresa que oferece site e aplicativos de delivery próprio, no formato white label, com uma gestão completa para restaurantes. ',
      'Como desenvolvedor, trabalhei na implementação de diversas funcionalidades, como programa de fidelidade por pontos, pagamento via Pix, chatbot para WhatsApp, entre outras.',
      'No papel de líder técnico, contribuí com a priorização e planejamento de novos projetos junto ao Product Manager, além de ajudar a manter o time alinhado, motivado e sempre com entregas de qualidade.'
    ],
    image: '/deliverydireto.png',
    url: 'https://site.deliverydireto.com.br/',
    tags: [
      'HTML',
      'SASS',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'PHP',
      'Kotlin',
    ],
  },
  {
    title: 'Mentor - PoliRetribua (2022 - 2024)',
    description: [
      'O Projeto PoliRetribua é formado por um grupo de voluntários dedicados a apoiar estudantes em condições de vulnerabilidade socioeconômica da Escola Politécnica da USP, por meio de mentorias e bolsas de estudo, garantindo a permanência deles até a conclusão da graduação e ajudando a evitar a evasão escolar.',
      'Como mentor voluntário, tive a oportunidade de orientar alguns alunos a enfrentar os desafios iniciais do curso, dando dicas sobre como organizar a rotina de estudos e encontrar o como se preparar para as provas. Além disso, procurava mostar a importância de aproveitar ao máximo o ambiente universitário, seja participando de grupos de extensão, conhecendo outros institutos ou praticando esportes.',
    ],
    image: '/poliretribua.png',
    url: 'https://poliretribua.org.br/',
  },
]
</script>

<template>
  <PortfolioSection
    dividerAtEnd
    title="Experiências"
  >
    <CustomCard
      v-for="exp in experiences"
      :key="exp.title"
      :title="exp.title"
      :subtitle="exp.subtitle"
      :text="exp.description"
      :image="exp.image"
      :url="exp.url"
      :tags="exp.tags"
    />
  </PortfolioSection>
</template>
