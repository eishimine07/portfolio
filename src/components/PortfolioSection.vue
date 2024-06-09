<script setup lang="ts">
import { ref } from 'vue'

type PortfolioSectionProps = {
  dividerAtEnd?: boolean
  title: string
}

const props = defineProps<PortfolioSectionProps>()

const show = ref(false)

const onIntersect = (isIntersecting: boolean) => {
  if (!show.value && isIntersecting) {
    show.value = true
  }
}
</script>

<template>
  <div
    v-intersect="onIntersect"
    :class="['portfolio-section', show && 'visible']"
  >
    <p class="text-h4 mb-4">
      {{ props.title }}
    </p>

    <div class="d-flex flex-column ga-2">
      <slot />
    </div>

    <v-divider
      v-if="props.dividerAtEnd"
      class="mt-6"
      thickness="2"
    />
  </div>
</template>

<style scoped>
.portfolio-section {
  opacity: 0;
  transition: opacity 0.3s ease-out 0.2s;

  &.visible {
    opacity: 1;
  }
}
</style>
