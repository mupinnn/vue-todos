<template>
  <div id="header">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1>vue-todos</h1>
    <p>localStorage based todo list built with Vue!</p>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
#header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  .logo {
    width: 200px;
    height: 200px;
  }
}
</style>
