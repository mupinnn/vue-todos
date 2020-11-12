<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;

  body {
    background: #2d3748;
  }

  #app {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 480px;
    min-height: 100vh;
    padding: 2rem;
  }
}
</style>
