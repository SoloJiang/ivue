<template>
  <transition name="dialog">
    <div class="dialog" @click="closeModal" v-show="visible">
      <div class="dialog_drop" ref="others"></div>
      <div class="close" @click="close" :class="leave ? 'dialog_leave' : 'dialog_enter'">×</div>
      <div class="dialog_wrapper" :class="leave ? 'dialog_leave' : 'dialog_enter'">
        <div class="dialog_header">{{title}}</div>
        <div class="dialog_description">{{description}}</div>
        <div class="dialog_body">
          <slot name="body"></slot>
        </div>
        <div class="dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'dialog',
  data() {
    return {
      leave: false
    }
  },
  props: {
    visible: {
      type: Boolean,
      defalut: false
    },
    title: {
      type: String,
      defalut: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.leave = true
      this.$emit('update:visible', false)
    },
    closeModal(e) {
      if (this.visible) {
        const others = this.$refs.others
        e.target.contains(others) ? this.close() : ''
      }
    }
  },
  watch: {
    visible(newVal) {
      this.leave = newVal ? false : true
    }
  }
}
</script>

<style lang="stylus" scoped>
common()
  top 0px
  left 0px
  bottom 0px
  right 0px

.dialog-leave-active
  opacity 0
  transition opacity 0.8s ease-out

.dialog
  position fixed
  z-index 100
  common()
  .dialog_drop
    position absolute
    z-index 0
    background rgba(0, 0, 0, 0.65)
    common()
  .close
    z-index 1
    color #ffffff
    position fixed
    top 0
    margin-top 15%
    left calc(50% + 280px)
    font-size 40px
    cursor pointer
  .dialog_leave
    animation leave 0.8s ease forwards
  .dialog_enter
    animation enter 0.8s ease forwards
  .dialog_wrapper
    z-index 1
    position relative
    margin 0 auto
    margin-top 15%
    min-height 200px
    width 0
    background-color #fff
    overflow hidden
    padding 20px
    box-sizing border-box
    width 500px
    .dialog_header
      white-space nowrap
      text-align center
      font-size 18px
      margin-bottom 20px
      font-weight bold
    .dialog_body
      margin 40px 0
    .dialog_footer
      margin-top 30px

@keyframes leave
  from
    opacity 1
    transform translateY(0)
  to
    opacity 0
    transform translateY(100px)

@keyframes enter
  from
    opacity 0
    transform translateY(100px)
  to
    opacity 1
    transform translateY(0)
</style>


