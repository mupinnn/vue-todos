<template>
  <form>
    <textarea name="text" rows="3" placeholder="What you want to do?">
    </textarea>
    <button type="submit" class="btn submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo"
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
