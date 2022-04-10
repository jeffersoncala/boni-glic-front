<template>
  <div id="home">
    <h1>Controle de Glicose Boni</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #home{
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 30px;
    }
  }
</style>
