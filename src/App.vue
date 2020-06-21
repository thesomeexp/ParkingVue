<template>
    <div>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><i class="el-icon-house" /><a href="/">首页</a></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-tools" />停车场管理</template>
          <el-menu-item index="2-1"><a href="/listPark">所有停车场</a></el-menu-item>
          <el-menu-item index="2-2"><a href="/listMyPark">我提交的停车位</a></el-menu-item>
          <el-menu-item index="2-3"><a href="/listDisablePark">已禁用的停车位</a></el-menu-item>
          <el-menu-item index="2-4"><a href="/listNoVerifiedPark">未验证的停车位</a></el-menu-item>
          <el-menu-item index="2-5"><a href="/listVerifiedPark">已验证的停车位</a></el-menu-item>
          <el-menu-item index="2-6"><a href="/addstate">添加停车场状态</a></el-menu-item>
          <el-menu-item index="2-7"><a href="/addparking">添加停车位</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><i class="el-icon-circle-plus" /><a href="/register">注册</a></el-menu-item>
        <el-menu-item index="4"><i class="el-icon-s-custom" /><a href="/login">登录</a></el-menu-item>
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
  },
}
</script>

<style>
   a{text-decoration: none}
</style>
