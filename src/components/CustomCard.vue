<script setup lang="ts">
import { useDisplay } from 'vuetify'

type CustomCardProps = {
  title: string
  subtitle?: string[]
  text: string[]
  image: string
  url: string
  tags?: string[]
}

defineProps<CustomCardProps>()

const { smAndUp } = useDisplay()
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :class="['card', isHovering && 'fade-border']"
      :href="url"
      variant="outlined"
      target="_blank"
    >
      <div class="d-flex flex-column-reverse flex-sm-row">
        <div>
          <v-card-item>
            <v-card-title>
              {{ title }}
            </v-card-title>
  
            <v-card-subtitle>
              <p v-for="p in subtitle">
                {{ p }}
              </p>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <p
              v-for="p in text"
              class="mb-1"
            >
              {{ p }}
            </p>

            <div
              v-if="tags"
              class="d-flex flex-wrap ga-2 mt-2"
            >
              <v-chip
                v-for="tag in tags"
                rounded
                size="small"
              >
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
        </div>
        
        <div :class="smAndUp && 'ma-auto'">
          <div class="rounded bg-white pa-4 ma-4">
            <v-img
              class="ma-auto"
              height="120"
              :src="image"
              width="160"
            />
          </div>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>


<style scoped>
.card {
  border-color: transparent;
  transition: border-color 0.3s ease-out;

  &.fade-border {
    border-color: rgba(234, 234, 234, 0.5);
  }
}
</style>