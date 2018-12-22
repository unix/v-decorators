<template>
<div id="app">
  <div class="doc">
    <button @click="to('https://github.com/HaiFengFE/v-decorators')">查看文档</button>
  </div>
  <demo/>
</div>
</template>

<script>
import demo from './components/demo'

export default {
  name: 'app',

  components: {
    demo,
  },

  methods: {
    to(url) {
      window.open(url)
    },
  },
}
</script>

<style src="./style.css"/>
<style>
.doc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #f7f6f6;
  display: flex;
  padding: 0 20px;
  justify-content: flex-start;
  align-items: center;
}
</style>

