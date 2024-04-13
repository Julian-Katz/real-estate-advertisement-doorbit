<template>
    <v-navigation-drawer v-model="drawerIsOpen">
      <v-list>
        <v-list-item title="Immo"/>
        <v-list-item
          title="Immobilieninserate"
          to="/advertisements"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="!drawerIsOpen">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer" />
      </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let drawerIsOpen = ref<boolean>();

const toggleDrawer = (): void => {
  drawerIsOpen.value = !drawerIsOpen.value;
};
</script>
