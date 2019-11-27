<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your App"/>
    <TextBox name="Jone" msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
    <TextBox name="Bob" msg="Animi consequuntur delectus nesciunt, quae sint temporibus!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TextBox from "./components/TextBox";

export default {
  name: 'app',
  components: {
    TextBox,
    HelloWorld
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
