<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}
body{
  min-width: 700px;
  // max-height: 1200px;
  height: 100vh;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
