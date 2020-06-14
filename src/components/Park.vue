<template>
  <div>
    <h1 style="text-align: center">停车场列表</h1>
    <div style="margin-left: 420px" >
    <table border="1">
      <tr style="text-align: center">
        <td>停车场编号</td>
        <td>停车场名称</td>
        <td>停车场描述</td>
        <td>经度</td>
        <td>纬度</td>
        <td>停车用户编号</td>
        <td>状态</td>
        <td></td>
      </tr>
      <tr v-for="info in information" style="text-align: center">
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.content }}</td>
        <td>{{ info.longitude }}</td>
        <td>{{ info.latitude }}</td>
        <td>{{ info.uid }}</td>
        <td>{{ info.state}}</td>
        <td><a href="#/infos/1">详情</a></td>
      </tr>
    </table>
    <a href="">添加</a><br>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "Park",
        data(){
          return{
            information:[]
          }
        },
        methods:{
          findAll(){
            this.$http.get("http://rap2.taobao.org:38080/app/mock/257039/infos/findAll?location=231").then((res)=>{
              this.information = res.data.data.infos; //获取RAP2中data里的infos中的数据
            });
          },
        },
        components:{},
        created() {
              this.findAll();
        },

    }
</script>

<style scoped>

</style>
