<template>
  <li class="todo-item">
    <p>the quick brown fox jumps over the lazy dog.</p>
    <span class="actions">
      <button class="btn btn-actions check">&#10003;</button>
      <button class="btn btn-actions delete">&#10005;</button>
    </span>
  </li>
</template>

<script>
export default {
  name: "TodoItem"
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.2rem;
  background: #212833;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  p {
    flex-grow: 1;
    word-break: break-all;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  .actions {
    display: flex;
    width: 100%;
  }

  .btn-actions {
    background: #1d232c;
    transition: 0.3s all ease-in-out;

    &:hover {
      background: #15191f;
    }

    &.check {
      width: 50%;
      color: #68d391;

      &:hover {
        color: #489967;
      }
    }

    &.delete {
      width: 50%;
      color: #c53030;

      &:hover {
        color: #971919;
      }
    }
  }
}
</style>
