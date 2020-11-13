<template>
  <ul id="todos">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
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
</style>
