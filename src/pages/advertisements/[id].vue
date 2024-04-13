<template>
  <v-container>
    <h1 class="text-h3 mb-3 balance" break-even>{{ ad.address }}</h1>
    <ImageViewer :images="ad.images" />

    <v-divider class="my-4" />
    <h2 class="text-h5">Daten</h2>
    <v-table>
      <tbody>
        <tr>
          <td>Preis</td>
          <td>
            {{
              new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(ad.price)
            }}
          </td>
        </tr>
        <tr>
          <td>Quadratmeter</td>
          <td>{{ ad.squareMeters }} m²</td>
        </tr>
        <tr>
          <td>Zimmer</td>
          <td>{{ ad.numberOfRooms }}</td>
        </tr>
        <tr>
          <td>Bäder</td>
          <td>{{ ad.numberOfBathrooms }}</td>
        </tr>
        <tr>
          <td>Energieeffizienzklasse</td>
          <td>{{ ad.energyEfficiencyClass }}</td>
        </tr>
      </tbody>
    </v-table>

    <h2 class="text-h5">Beschreibung</h2>
    <p class="text-body-1 mb-3">{{ ad.description }}</p>

    <h2 class="text-h5">Lage</h2>
    <p class="text-body-1 mb-3">{{ ad.locationDescription }}</p>
  </v-container>
</template>

<script setup lang="ts">
import {
  AdvertisementService,
  Advertisement,
} from "@/services/advertisement.service";
import { useRoute } from "vue-router";

const route = useRoute();
const ad: Advertisement = AdvertisementService.getAdvertisementById(
  Number(route.params.id)
);
</script>

<style scoped lang="scss">
.balance {
  text-wrap: balance;
}
</style>
