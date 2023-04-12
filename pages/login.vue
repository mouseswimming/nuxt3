<script setup>
import { useUser } from "~/stores/User";

definePageMeta({
  layout: "plain",
});

// const isLoggedIn = useIsLoggedIn();
const user = useUser();
</script>

<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label>
      Username
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <button>login</button>
  </form>
</template>
