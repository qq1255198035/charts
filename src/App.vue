<template>
  <div id="app">
    <div>
      <HelloWorld />
    </div>
    <div>
      <MyCharts />
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyCharts from './components/MyCharts.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    MyCharts
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  padding: 30px;
  > div{
    width: 50%;
  }
}
</style>
