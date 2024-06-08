<script setup lang="ts">
type PortfolioSectionProps = {
  title: string
}

const props = defineProps<PortfolioSectionProps>()
</script>

<template>
  <div>
    <h2>
      {{ props.title }}
    </h2>

    <slot />
  </div>
</template>
