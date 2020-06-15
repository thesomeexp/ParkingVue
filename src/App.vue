<template>
    <div>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><i class="el-icon-house" /><a href="#/">首页</a></el-menu-item>
        <el-menu-item index="2"><i class="el-icon-s-tools" /><a href="#/parking">停车场管理</a></el-menu-item>
        <el-menu-item index="3"><i class="el-icon-circle-plus" /><a href="#/register">注册</a></el-menu-item>
        <el-menu-item index="4"><i class="el-icon-s-custom" /><a href="#/login">登录</a></el-menu-item>
        <el-menu-item index="5"><i class="el-icon-picture-outline-round" /><a href="#/head">上传图片</a></el-menu-item>
        <el-menu-item index="6"><i class="el-icon-circle-plus-outline" /><a href="#/addparking">添加停车位</a></el-menu-item>
      </el-menu>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data(){
    return{}
  }
}
</script>

<style>
   a{text-decoration: none}
</style>
