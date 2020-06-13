<template>
    <div>
      LoginTokenDemo
      <table>
        <tr>
          <td>
            phone
          </td>
          <td>
            <input v-model="phone">
          </td>
        </tr>
        <tr>
          <td>
            password
          </td>
          <td>
            <input v-model="password">
          </td>
        </tr>
      </table>
      <button @click="LoginTest" >登录测试Axios</button>
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

</style>
