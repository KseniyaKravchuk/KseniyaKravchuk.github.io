<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Shopping list</h1>
    <ShoppingList v-bind:items="items"/>
  </div>
</template>

<script>
import ShoppingList from '@/components/ShoppingList'
export default {
  name: 'app',
  data() {
    return {
      items: [
        {id: 1, name: 'Гречка', completed: false},
        {id: 2, name: 'Курица', completed: false},
        {id: 3, name: 'Овощи', completed: false},
      ]
    }
  },
  components: {
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
