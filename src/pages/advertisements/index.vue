<template>
  <v-container>
    <h1 class="text-h3 mb-3">Immobilieninserate</h1>
    <AdvertisementsFilter v-model="advertisements" />
    <v-row>
      <v-col v-for="ad in advertisements" :key="ad.id" cols="12" md="6" lg="4">
        <v-card :to="`/advertisements/${ad.id}`">
          <v-img height="250" :src="`/images/${ad.images[0]}`" cover />
          <v-card-title>
            {{ ad.address }}
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              Preis:
              {{
                new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(ad.price)
              }}
            </p>
            <p class="text-body-1">Quadratmeter: {{ ad.squareMeters }} m²</p>
            <p class="text-body-1">Zimmer: {{ ad.numberOfRooms }}</p>
            <p class="text-body-1">Energieeffizienzklasse: {{ ad.energyEfficiencyClass }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  AdvertisementService,
  Advertisement,
} from "@/services/advertisement.service";
import { ref } from "vue";

const advertisements = ref<Advertisement[]>(
  AdvertisementService.getAdvertisements()
);
</script>
