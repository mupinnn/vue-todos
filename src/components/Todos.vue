<template>
  <ul id="todos">
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
}
</script>