<template>
<div>
  <button @click="$emit('update', 'zh')">中文</button>
  <ul class="list">
    <li class="item">
      <p>auto_catch</p>
      <button @click="request">catch a wrong request</button>
    </li>
    <li class="item">
      <p>debounce</p>
      <button @click="debounce">debounce</button>
    </li>
    <li class="item">
      <p>delay</p>
      <button @click="delay">delay</button>
    </li>
    <li class="item">
      <p>time</p>
      <button @click="time">time</button>
    </li>
    <li class="item">
      <p>shortcut: {{ notChangeValue }}</p>
      <div>
        <button @click="add">add value</button>
        <button @click="refresh">fouce refresh</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { Decorators } from '../../../index'

export default {
  @Decorators.Shortcut({
    notChangeValue: 1,
  })
  name: 'en',

  methods: {
    @Decorators.AutoCatch()
    async request() {
      const w = await fetch()
    },

    @Decorators.Debounce(800)
    debounce() {
      console.log('debounce')
    },

    @Decorators.Delay(500)
    delay() {
      console.log('delay')
    },

    @Decorators.Time()
    time() {
      const texts = new Array(200).fill('hello').map(v => `${v} world`)
      console.log(texts)
    },

    add() {
      this.notChangeValue = this.notChangeValue + 1
    },

    refresh() {
      this.$forceUpdate()
    }
  },
}
</script>

<style scoped>
.list {
  width: 600px;
  margin: 20px auto;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f5f3f3;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
