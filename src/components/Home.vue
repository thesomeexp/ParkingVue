<template>
  <div>
    <h1 style="text-align: center">基于SpringCloud + Vue—Cli的公益停车场项目</h1>
    <div class="progress-center-container">
      <div class="progress-small-container">
        <div class="progress-width">
          <div class="progress-text">
            审核进度
          </div>
          <div>
            <el-progress type="circle" :percentage="verified_process"></el-progress>
          </div>
        </div>
        <div class="progress-width">
          <div class="progress-text">
            通过率
          </div>
          <div>
            <el-progress type="circle" :percentage="verified_rate"></el-progress>
          </div>
        </div>

        <div class="progress-bar-title">

          停车场信息

        </div>
        <div class="progress-bar-div">
          <div class="progress-bar-div-progress">
            <el-progress :percentage="verified_sum_rate" status="success"></el-progress>
          </div>
          <div class="progress-bar-div-text">
            <span style="color: green"> {{ this.verified_num }} </span>已验证
          </div>

        </div>


        <div class="progress-bar-div">
          <div class="progress-bar-div-progress">
            <el-progress :percentage="no_verified_sum_rate" status="warning"></el-progress>
          </div>
          <div class="progress-bar-div-text">
            <span style="color: orange">{{ this.no_verified_num }}</span>未验证
          </div>

        </div>
        <div class="progress-bar-div">
          <div class="progress-bar-div-progress">
            <el-progress :percentage="disable_sum_rate" status="exception"></el-progress>
          </div>
          <div class="progress-bar-div-text">
            <span style="color: red">{{ this.disable_num }}</span>已禁用
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Global from "../utils/Global";

  export default {
    name: "Home",
    data() {
      return {
        sum: 10, // 总数
        verified_num: 3, // 已验证数量
        no_verified_num: 3, // 未验证数量
        disable_num: 4, // 已禁用数量

        verified_process: 19, // 审核进度
        verified_rate: 18, // 通过率
        verified_sum_rate: 88, // 已验证
        no_verified_sum_rate: 10, // 未验证
        disable_sum_rate: 2, // 已禁用
      }
    },

    methods: {


      // 列出那些统计内容
      list() {
        console.log("list的方法")
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
        this.$http.get(Global.gateway + "infos-api/admin/home",
          {
            headers: {
              'Authorization': 'Bearer ' + this.accessToken
            }
          }).then((res) => {
          // console.log(res.data.data)
          let result = res.data.data;
          that.sum = result.sum
          that.verified_num = result.verified
          that.no_verified_num = result.no_verified
          that.disable_num = result.disable

          that.verified_process = (1 - (that.no_verified_num / that.sum) ) * 100
          that.verified_rate = (that.verified_num / that.sum ) * 100
          that.verified_sum_rate = (that.verified_num / that.sum ) * 100
          that.no_verified_sum_rate = (that.no_verified_num / that.sum) * 100
          that.disable_sum_rate = (that.disable_num / that.sum) * 100
          // that.reviewList = res.data.data.list;
        });
      },


    },


    created() {
      this.list();
    }
  }

</script>

<style scoped>
  .progress-text {
    width: 126px;
    text-align: center;
  }

  .progress-width {
    float: left;
    width: 126px;
    padding: 10px;
  }

  .progress-bar-div {
    margin-top: 20px;
    margin-left: 20px;
    width: 400px;

    float: left;
  }

  .progress-center-container {
    width: 100%;
    height: 170px;
    /*border: 1px dashed #000;*/

  }

  .progress-small-container {
    width: 800px;
    height: 170px;
    /*border: 1px dashed #000;*/
    margin: 0 auto;
  }

  .progress-bar-div-progress {
    width: 300px;
    height: 13px;
    float: left;
  }

  .progress-bar-div-text {
    width: 100px;
    float: left;
  }

  .progress-bar-title {
    text-align: center;
    width: 400px;

    float: left;
  }
</style>
