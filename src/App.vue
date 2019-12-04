<template lang="pug">
div
  keep-alive
    router-view
  router-link(to="/") Home 
  router-link(to="/Lista") Lista de personas 
  router-link(to="/Add") Agregar usuarios
</template>

<script>
export default {
  
}
</script>
<style scoped>

</style>