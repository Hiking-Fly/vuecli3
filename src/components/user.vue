<template>
  <div>
      用户界面
    <p>{{userId}}</p>
    <p>{{$route.params.userId}}</p>
  </div>

</template>

<script>
export default {
  data () {
    return {
    };
  },
  components: {},
  computed: {
      userId(){
          return this.$route.params.userId
      }
  }
}
</script>

<style lang='scss' scoped>
</style>