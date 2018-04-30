<template>
  <div class="container" v-show="isShow">
    <slot-component></slot-component>
  </div>
</template>

<script>
import Vue from 'vue'
const eventHub = new Vue()

export default {
  data() {
    return {
      isShow: false
    }
  },
  created() {
    eventHub.$on("close-dialog", this.close)
    eventHub.$on("open-dialog", this.open)
  },
  methods: {
    close() {
      this.isShow = false
    },
    open() {
      this.isShow = true
    }
  },
  beforeDestroy() {
    eventHub.$off("close-dialog", this.close)
    eventHub.$off("open-dialog", this.open)
  }
}
</script>

<style lang="stylus" scoped>
.container
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  overflow hidden
</style>
