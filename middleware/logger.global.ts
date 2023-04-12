export default defineNuxtRouteMiddleware((to, from) => {
  console.log("global logger", { to, from });
});
