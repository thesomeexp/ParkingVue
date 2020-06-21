<template>
  <div>
    <h1 style="text-align: center">停车场信息</h1>
    <div style="margin-left: 420px">
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
        <tr v-for="park in parking" style="text-align: center">
          <td>{{ park.id }}</td>
          <td>{{ park.name }}</td>
          <td>{{ park.content }}</td>
          <td>{{ park.longitude }}</td>
          <td>{{ park.latitude }}</td>
          <td>{{ park.uid }}</td>
          <td>{{ park.state}}</td>
          <td><a href="javascript:;" @click="delRow(park.id)">删除</a> <a :href="'#/infos/edit?id='+park.id">修改</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FindByLocation",
        data(){
          return{
            parking: {
              location:''
            },
          }
        },
        methods:{
          findbylo(){
            this.$http.get("http://localhost:9001/infos-api/infos?" +"location="+this.parking.location).then(res=>{
              console.log(res.data);
              // this.parking = res.data;
            })
          },
        },
        created() {
          // console.log(this.$route.query);
          this.findbylo();
        },

    }
</script>

<style scoped>

</style>
