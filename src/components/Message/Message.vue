 <template>
  <transition name="fade">
    <div class="kiko-message" v-if="isShow">
      {{message}}
    </div>
  </transition>
</template>
<script type="text/javascript">
  export default {
    name: 'kiko-message',
    data () {
     return {
      message: '',
      time: 3000,
      isShow: true
    }
  },
  mounted () {
    this.close()
  },
  methods: {
    close () {
      var that = this
      window.setTimeout(function() {
        that.isShow = false
        }, this.time);
      }
    }
  }
</script>
