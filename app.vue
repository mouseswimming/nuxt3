<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk}-my Nuxt Movie Site`
      : "my Nuxt Movie Site";
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
}
</style>
