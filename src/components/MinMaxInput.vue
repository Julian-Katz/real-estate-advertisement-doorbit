<template>
  <div class="w-100">
    <h4>{{ label }}</h4>
    <div class="d-flex">
      <v-text-field
        type="number"
        v-model.number="min"
        @input="
          (e) =>
            (min = e.target.value === '' ? undefined : Number(e.target.value))
        "
        label="min"
        :suffix="suffix"
        hide-spin-buttons
        density="compact"
      />
      <span class="mt-2 mx-4">&#8210;</span>
      <v-text-field
        type="number"
        v-model.number="max"
        @input="
          (e) =>
            (max = e.target.value === '' ? undefined : Number(e.target.value))
        "
        label="max"
        :suffix="suffix"
        hide-spin-buttons
        density="compact"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
  suffix?: string;
}>();

const min = defineModel<number | undefined>("min");
const max = defineModel<number | undefined>("max");
</script>
