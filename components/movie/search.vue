<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  );
  movies.value = Search;
}
search();
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul class="movie-list">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.Title" class="movie-poster" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.movie-poster {
  width: 200px;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
}
</style>
