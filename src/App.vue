<template>
  <div id="app">
    <Header />
    <Todos
      v-bind:todos="todos"
      v-on:del-todo="deleteTodo"
      v-on:check-todo="completeTodo"
    />
    <AddTodo v-on:add-todo="addTodo" />
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
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];

      // Add to localStorage
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    completeTodo(id) {
      const updatedTodo = this.todos.find(todo => todo.id === id);
      updatedTodo.completed = !updatedTodo.completed;

      // Update data in localStorage
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);

      // Update data in localStorage
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  created() {
    // Get todos data from localStorage
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
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

  .btn {
    background: none;
    border: none;
    color: #fff;
    padding: 0;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
