<template>
  <div>
    <h1>停车场信息</h1>
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
        <td><a href="javascript:;" @click="delRow(info.id)">删除</a> <a :href="'#/infos/edit?id='+info.id">修改</a></td>
      </tr>
    </table>
    <div style="width: 600px;height: 600px">
      <canvas id="myChart" ></canvas>
    </div>
  </div>

</template>

<script>
  import Chart from 'chart.js'
  export default {
        name: "FindParkById",
        data(){
          return{
            information:[]
          }
        },
        methods:{
          findOne(){
            this.$http.get("http://rap2.taobao.org:38080/app/mock/257039/infos/1").then(res=>{
              console.log(res);
              this.information = res.data.data;
            })
          },
        },
        created() {
          this.findOne();
        },
        mounted() {
          var ctx = document.getElementById("myChart");
          var myChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
                "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
              datasets: [
                {
                  label: "停车场24小时拥挤度",
                  backgroundColor: "rgba(225,10,10,0.3)",
                  borderColor: "rgba(225,103,110,1)",
                  borderWidth: 1,
                  pointStrokeColor: "#fff",
                  pointStyle: "crossRot",
                  data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                  cubicInterpolationMode: "monotone",
                  spanGaps: "false",
                  fill: "false"
                }
              ]
            },
          });

        },
          options:{
            responsive:true,
            maintainAspectRatio:false
          },
  }

</script>

<style scoped>

</style>
