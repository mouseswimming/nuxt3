export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return body;
});

// https://v3.nuxtjs.org/guide/directory-structure/server
// https://nitro.unjs.io/
// https://github.com/unjs/h3
// https://www.jsdocs.io/package/h3#package-index-functions
