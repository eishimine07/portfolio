<script setup lang="ts">
import { computed } from 'vue'

type PortfolioSectionProps = {
  dividerAtEnd?: boolean
  minHeight?: number 
  title: string
}

const props = withDefaults(defineProps<PortfolioSectionProps>(), {
  minHeight: 48,
})

const threshold = computed(() => 48 / props.minHeight)
</script>

<template>
  <v-lazy
    :min-height="props.minHeight"
    :options="{'threshold':threshold}"
    transition="scroll-y-transition"
  >
    <div>
      <h2>
        {{ props.title }}
      </h2>

      <slot />

      <v-divider
        v-if="props.dividerAtEnd"
        class="mt-6"
        thickness="2"
      />
    </div>
  </v-lazy>
</template>
