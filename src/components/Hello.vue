<template>
  <div class="hello">
    <button @click="show = !show">Modal测试</button>
    <s-dialog :title="'添加到论文集'" :visible.sync="show">
      <div slot="body">
        <div align="center">你可以创建多个论文集，将你喜欢的论文分类收藏</div>
      </div>
      <div slot="footer">
        <button>确定</button>
      </div>
    </s-dialog>
  </div>
</template>

<script>
import dialog from './Dialog'
export default {
  name: 'hello',
  data () {
    return {
      show: false
    }
  },
  components: {
    "s-dialog": dialog 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
