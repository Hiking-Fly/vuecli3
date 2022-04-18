<template>
  <div id="app">
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>
    <router-link :to="'/user/'+userId" replace active-class="active">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'lisi',age:23}}" replace>档案</router-link>
    <!-- <keep-alive exclude=""><router-view></router-view></keep-alive> -->
    <router-view></router-view>
    <button @click="handleClick">关于
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      userId:'zhangsan'
    };
  },
  components: { 
  },
  methods: {
    handleClick(){
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>

.active{
  color: red;
}
</style>
