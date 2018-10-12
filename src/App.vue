<template>
  <div id="app">
    <router-link to="/" exact class="logo" title="Главная">
      <img alt="Vue logo" src="./assets/logo.png">
    </router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    font-family: Roboto,sans-serif;

    #app {
      max-width: 966px;
      margin: 0 auto;

      .logo img {
        width: 20px;
      }
    }
  }
</style>
