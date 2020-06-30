<template>
    <div>
      <el-menu
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         v-show="!(path === '/login')"
         :default-active="activeIndex"
         active-text-color="#29916E"
      >
        <el-menu-item index="1">
          <i class="el-icon-house"/><a href="/home">首页</a>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-tools"/>停车场管理</template>
          <el-menu-item index="2-1"><a href="/listPark">所有停车场</a></el-menu-item>
          <el-menu-item index="2-2"><a href="/listMyPark">我提交的停车位</a></el-menu-item>
          <el-menu-item index="2-3"><a href="/listDisablePark">已禁用的停车位</a></el-menu-item>
          <el-menu-item index="2-4"><a href="/listNoVerifiedPark">未验证的停车位</a></el-menu-item>
          <el-menu-item index="2-5"><a href="/listVerifiedPark">已验证的停车位</a></el-menu-item>
          <el-menu-item index="2-6"><a href="/addstate">添加停车场状态</a></el-menu-item>
          <el-menu-item index="2-7"><a href="/addparking">添加停车位</a></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-tools"/>评论管理</template>
          <el-menu-item index="3-1"><a href="/addMark">添加评论</a></el-menu-item>
          <el-menu-item index="3-2"><a href="/listMark">查看评论</a></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-s-tools"/>图片管理</template>
          <el-menu-item index="4-1"><a href="/addInfoImage">添加详情</a></el-menu-item>
          <el-menu-item index="4-2"><a href="/listInfoImage">查看提交详情</a></el-menu-item>
          <el-menu-item index="4-3"><a href="/listNoVerifiedImage">未验证详情</a></el-menu-item>
          <el-menu-item index="4-4"><a href="/listDisableImage">已禁用详情</a></el-menu-item>
          <el-menu-item index="4-5"><a href="/listVerifiedImage">已验证详情</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="5"><i class="el-icon-circle-plus"/><a href="/register">注册</a></el-menu-item>
        <el-menu-item index="6"><i class="el-icon-s-custom"/><a href="/login">登录</a></el-menu-item>
      </el-menu>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex: '1',
      path:''
    }
  },

  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  // 判断路由
  mounted() {
    this.path = this.$route.path;   //this.path = 当前页面路由
    // console.log(this.$route.path)
  },
  //监听路由变化
  watch:{
    $route(to,from){
      this.path = to.path //打开新页面路由
    }
  }
}
</script>

<style>
   a{text-decoration: none}
</style>
