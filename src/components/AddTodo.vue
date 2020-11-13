<template>
  <form @submit="addTodo">
    <textarea
      name="text"
      rows="3"
      placeholder="What you want to do?"
      v-model="todoText"
    >
    </textarea>
    <button type="submit" class="btn submit">Submit</button>
  </form>
</template>

<script>
import { uuid } from "uuidv4";

export default {
  name: "AddTodo",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodo = {
        id: uuid(),
        text: this.todoText,
        completed: false
      };

      // Send to parent
      this.$emit("add-todo", newTodo);

      // Reset input
      this.todoText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  textarea {
    background: #212833;
    outline: none;
    border: none;
    resize: none;
    width: 100%;
    padding: 0.5rem;
    color: #fff;
  }

  .submit {
    background: #1d232c;
    font-size: 1.5rem;
    padding: 0.5rem;
    transition: 0.3s all ease-in-out;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    &:hover {
      background: #101318;
    }
  }
}
</style>
