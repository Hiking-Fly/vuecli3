<template>
  <div>我是home
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>