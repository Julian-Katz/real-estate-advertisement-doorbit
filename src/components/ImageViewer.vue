<template>
  <v-img height="50vh" :src="`/images/${images[position]}`" cover />
  <v-slide-group v-if="images.length > 1" mandatory v-model="position">
    <v-slide-group-item
      v-for="image in images"
      :key="image"
      v-slot="{ isSelected, toggle }"
    >
      <v-img
        aspect-ratio="1"
        cover
        :src="`/images/${image}`"
        :class="{ notSelected: !isSelected }"
        @click="toggle"
        height="5rem"
        class="cursor-pointer"
      />
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  images: string[];
}>();

const position = ref<number>(0);
</script>

<style scoped lang="scss">
.notSelected {
  filter: blur(5px);
  border-left: white 10px solid;
  border-right: white 10px solid;
}
</style>
