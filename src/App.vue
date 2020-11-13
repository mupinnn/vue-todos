<template>
  <div id="app">
    <Header />
    <Todos />
    <AddTodo />
  </div>
</template>

<script>
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: localStorage.getItem("todos") || []
    }
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
