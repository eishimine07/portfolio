<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const mouseX = ref<number>(0)
const mouseY = ref<number>(0)
const mouseEffect = computed(() => ({
  background: `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, rgba(230, 190, 245, 0.07), rgba(230, 190, 245, 0) 30%)`
}))

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="mouse-effect" :style="mouseEffect"></div>
</template>

<style scoped>
.mouse-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>