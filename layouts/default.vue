<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
  </nav>
  <slot></slot>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
}
</style>
