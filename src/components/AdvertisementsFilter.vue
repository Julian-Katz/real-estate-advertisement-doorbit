<template>
  <div class="d-flex flex-wrap ga-4 align-center flex-lg-nowrap mb-6">
    <div class="custom-input-flex">
      <MinMaxInput
        v-model:min="minPrice"
        v-model:max="maxPrice"
        label="Preis"
        suffix="€"
      />
      <MinMaxInput
        v-model:min="minSquareMeters"
        v-model:max="maxSquareMeters"
        label="Quadratmeter"
        suffix="m²"
      />
    </div>
    <div class="custom-button-flex">
      <v-btn @click="reset" text="Zurücksetzen" />
      <v-btn @click="filter" color="primary" text="Filtern" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Advertisement } from "@/services/advertisement.service";

const advertisements = defineModel<Advertisement[]>({ default: [] });
const advertisementsCopy = ref<Advertisement[]>(advertisements.value);

const minPrice = ref<number>();
const maxPrice = ref<number>();
const minSquareMeters = ref<number>();
const maxSquareMeters = ref<number>();

const reset = () => {
  minPrice.value = undefined;
  maxPrice.value = undefined;
  minSquareMeters.value = undefined;
  maxSquareMeters.value = undefined;
  advertisements.value = advertisementsCopy.value;
};

const filter = () => {
  advertisements.value = advertisementsCopy.value.filter((ad) => {
    return (
      (!minPrice.value || ad.price >= minPrice.value) &&
      (!maxPrice.value || ad.price <= maxPrice.value) &&
      (!minSquareMeters.value || ad.squareMeters >= minSquareMeters.value) &&
      (!maxSquareMeters.value || ad.squareMeters <= maxSquareMeters.value)
    );
  });
};
</script>

<style scoped lang="scss">
.custom-button-flex {
  width: 100%;
  display: flex;
  gap: 1rem;
  > * {
    flex: 1;
  }
}

.custom-input-flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  > * {
    flex: 1;
    min-width: 250px;
  }
}
</style>
