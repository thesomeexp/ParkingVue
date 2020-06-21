<template>
  <div>
    <h1 style="text-align: center">停车场信息</h1>
    <table class="el-table" style="width: 53%;position: relative;margin-left: 23%">
      <tr>
        <td style="text-align: center">停车场编号</td>
        <td style="text-align: center">停车场名称</td>
        <td style="text-align: center">提交者编号</td>
        <td style="text-align: center">提交时间</td>
        <td style="text-align: center">状态</td>
        <td style="text-align: center">状态更新时间</td>
      </tr>
      <tr v-for="info in information" >
        <td style="text-align: center">{{ info.id }}</td>
        <td style="text-align: center">{{ info.name }}</td>
        <td style="text-align: center">{{ info.uid }}</td>
        <td style="text-align: center">{{ info.infosubmitdate | formatDate}}</td>
        <td style="text-align: center">{{ info.state }}</td>
        <td style="text-align: center">{{ info.stateupdatedate | formatDate}}</td>
      </tr>
    </table>
    <br>
    <table class="el-table" style="width: 53%;position: relative;margin-left: 23%">
      <tr>
        <td>t0</td>
        <td>t1</td>
        <td>t2</td>
        <td>t3</td>
        <td>t4</td>
        <td>t5</td>
        <td>t6</td>
        <td>t7</td>
        <td>t8</td>
        <td>t9</td>
        <td>t10</td>
        <td>t11</td>
        <td>t12</td>
        <td>t13</td>
        <td>t14</td>
        <td>t15</td>
        <td>t16</td>
        <td>t17</td>
        <td>t18</td>
        <td>t19</td>
        <td>t20</td>
        <td>t21</td>
        <td>t22</td>
        <td>t23</td>
      </tr>
      <tr v-for="info in information">
        <td>{{info.t0}}</td>
        <td>{{info.t1}}</td>
        <td>{{info.t2}}</td>
        <td>{{info.t3}}</td>
        <td>{{info.t4}}</td>
        <td>{{info.t5}}</td>
        <td>{{info.t6}}</td>
        <td>{{info.t7}}</td>
        <td>{{info.t8}}</td>
        <td>{{info.t9}}</td>
        <td>{{info.t10}}</td>
        <td>{{info.t11}}</td>
        <td>{{info.t12}}</td>
        <td>{{info.t13}}</td>
        <td>{{info.t14}}</td>
        <td>{{info.t15}}</td>
        <td>{{info.t16}}</td>
        <td>{{info.t17}}</td>
        <td>{{info.t18}}</td>
        <td>{{info.t19}}</td>
        <td>{{info.t20}}</td>
        <td>{{info.t21}}</td>
        <td>{{info.t22}}</td>
        <td>{{info.t23}}</td>
      </tr>
    </table>

    <div style="width: 55%;height: 55%;margin: 3% 23%">
      <canvas id="myChart" ></canvas>
    </div>


    <router-view/>
  </div>

</template>

<script>
  import {formatDate} from '@/utils/filters/formatDate.js'
  import Chart from 'chart.js'
  export default {
        name: "FindParkById",
        data(){
          return{
            information: {
              name:'', infoSubmitDate:'', state:'', username: '', x:'', y:'',
              location:'', stateUpdateDate:'', t0:'', t1:'', t2:'', t3:'', t4:'', t5:'',
              t6:'', t7:'', t8:'', t9:'', t10:'', t11:'', t12:'', t13:'', t14:'', t15:'',
              t16:'', t17:'', t18:'', t19:'', t20:'', t21:'', t22:'', t23:''
            }
          }
        },

        filters: {
          formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
          }
        },

        methods: {
          initData() {
            let id = this.$route.params.id;
            // 获取本地token, 判断是否登录
            let localStorageToken = localStorage.getItem("accessToken")
            // 如果本地token不为空则设置到请求头去
            if (localStorageToken != null) {
              this.accessToken = localStorageToken
            } else {
              alert("未登录")
              return
            }
            let that = this
            this.id = this.$route.query.id
            this.$http.get("http://localhost:9001/infos-api/infos/" + this.id, {
              headers: {
                'Authorization': 'Bearer ' + this.accessToken
              }
            }).then(res => {
              console.log(res.data)
              that.information = res.data.data

              let ctx = document.getElementById("myChart"); //绘制图表
              console.log('this.information' + this.information)
              let data = this.information
              let info = data.info
              let t0 = info['t0']
              let myChart = new Chart(ctx, {
                type: "line",
                legend:{},
                data: {
                  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
                    "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],    //x轴
                  datasets: [
                    {
                      label: "停车场24小时拥挤度",
                      backgroundColor: "rgba(225,10,10,0.3)",
                      borderColor: "rgba(225,103,110,1)",
                      borderWidth: 1,
                      pointStrokeColor: "#fff",
                      pointStyle: "crossRot",
                      data: [info['t0'], info['t1'], info['t2'], info['t3'], info['t4'], info['t5'],
                        info['t6'], info['t7'], info['t8'], info['t9'], info['t10'], info['t11'],
                        info['t12'], info['t13'], info['t14'], info['t15'], info['t16'], info['t17'],
                        info['t18'], info['t19'], info['t20'], info['t21'], info['t22'], info['t23']
                      ], //y轴
                      fill: "false",
                    }
                  ]
                },
              });
            })
          }
        },

        created() {
          this.initData();
        },

        mounted() {

        },
          options:{
            responsive:true,
            maintainAspectRatio:false,
            yAxis:{
              min:0,
              max:10
            }
          },
  }

</script>
<style scoped>

</style>
