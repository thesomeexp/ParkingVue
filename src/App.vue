<template>
    <div id="app">
      <a href="#/home">主页</a>
      <a href="#/parking">停车场管理</a>
      <a href="#/register">注册</a>
      <a href="#/login">登录</a>
      <a href="#/head">上传图片</a>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
