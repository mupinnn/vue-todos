<template>
  <ul id="todos" v-if="todos.length > 0">
    <TodoItem
      v-bind:key="todo.id"
      v-for="todo in todos"
      v-bind:todo="todo"
      v-on:del-todo="$emit('del-todo', todo.id)"
      v-on:check-todo="$emit('check-todo', todo.id)"
    />
  </ul>
  <p class="no-data" v-else>There's nothing to do :(</p>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
#todos {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.no-data {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.8rem;
}
</style>
