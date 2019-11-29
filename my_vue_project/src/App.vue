<template>
  <div id="app">
    <div class="all_lists">
      <h1>All shopping lists</h1>
    </div>
    <div class="current_list">
      <h1>Shopping list</h1>
      <ShoppingList v-bind:items="items"
                    @remove-item="removeItem"/>
    </div>
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
  methods: {
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
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
  display: flex;
  height: 100vh;
}
  .all_lists {
    width: 40%;
    border-right: 1px solid #000000;
  }
  .current_list {
    width: 60%;
  }
</style>
