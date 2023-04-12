<template>
  <h1>
    <pre>
        {{ data }}
    </pre>
  </h1>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Title", "Plot", "Year", "Poster", "Error"],
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<style scoped></style>
