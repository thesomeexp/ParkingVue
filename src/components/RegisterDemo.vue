<template>
    <div>
      <title style="font-size: large">Welcome to Register Page!</title>
      <form action="" method="post" id="register">
        <table>
          <tr>
            <td>Name</td>
            <td><input v-model="name" type="text" placeholder="Please input your name"></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input v-model="password" type="password" placeholder="Please input your password"></td>
          </tr>
          <tr>
            <td>Phone</td>
            <td><input v-model="phone" type="text" placeholder="Please input your phone"> </td>
          </tr>
        </table>
        <input type="button" value="Register" @click="Register()">
        <input type="reset"  value="Reset">
      </form>
    </div>
</template>

<script>
    export default {
        name: "RegisterDemo",
        data(){
            return{
              name:'yang',
              password:'123',
              phone:'13692366637'
            }
        },
        methods:{
          Register(){
            //取得表单对象
            let req_data = {
              name: this.name,
              password: this.password,
              phone: this.phone
            }
            //讲表单对象转换成formdata
            let str = this.$qs.stringify(req_data);
            console.log("表单姓名密码" + this.name+this.password)
            console.log("转换的formData" + str)
            this.$http
              .post('http://localhost:9001/user-api/register',
                str)
              .then((response)=>{
                console.log(response)
                // console.log(response.data)
              })
              .catch((err)=>{
                console.log('err: ' + err)
              })
          },
          }
    }
</script>

<style scoped>

</style>
