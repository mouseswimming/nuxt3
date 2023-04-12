<script setup>
import { useUser } from "~/stores/User";

// const isLoggedIn = useIsLoggedIn();
const user = useUser();
</script>
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
}
</style>
