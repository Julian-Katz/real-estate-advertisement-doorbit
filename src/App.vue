<template>
  <v-app>
    <Navigation/>
    <v-main>
      <div class="container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
