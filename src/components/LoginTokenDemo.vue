<template>
    <div>
      <h1 style="text-align: center">Welcome to login page!</h1>
      <div style="margin-left: 550px">
      <table>
        <tr>
          <td>
            phone
          </td>
          <td>
            <input type="text" placeholder="Please input your phone" v-model="phone"/>
          </td>
        </tr>
        <p/>
        <tr>
          <td>
            password
          </td>
          <td>
            <input type="text" placeholder="Please input your password" v-model="password">
          </td>
        </tr>
      </table>
        <p/>
      <button @click="LoginTest" >登录测试Axios</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoginTokenDemo",
      data(){
        return {
          phone: '333',
          password: '333',
          token: ''
        }
      },
      methods: {
        LoginTest() {
          // 取得提交的对象
          let req_data = {
            phone: this.phone,
            password: this.password
          };
          // 转换为formData
          let str = this.$qs.stringify(req_data)

          console.log("表单账号密码" + this.phone, this.password)
          console.log('转换的formData' + str)
          console.log('登陆前token: ' + this.token)
          let that = this;
          this.$http
            .post('http://localhost:9001/user-api/login',
              str)
            .then((response)=>{
              console.log('响应返回结果: ')
              console.log(response)
              let result = response.data;
              if (result.status === "success") {
                console.log('更新token')
                that.token = 'Bearer ' + result.data.token
                console.log(that.token)
                // 存储token到localStorage
                window.localStorage.setItem("accessToken", result.data.token);
              }
              // console.log(response.data)
            })
            .catch((err)=>{
              console.log('err: ' + err)
            })
        }
      }
    }
</script>

<style scoped>
  input{
    border: 1px solid #ccc;
    padding: 7px 33px;
    border-radius: 3px;
    padding-left: 5px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  }
  input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
</style>
