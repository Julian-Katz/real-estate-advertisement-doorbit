<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  const router = useRouter();
  router.replace("/advertisements");
});
</script>
