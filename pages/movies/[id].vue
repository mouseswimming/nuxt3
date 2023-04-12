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
    pick: ["Title", "Plot", "Year", "Error"],
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>

<style scoped></style>
