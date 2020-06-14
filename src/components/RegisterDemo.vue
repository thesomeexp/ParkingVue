<template>
    <div>
      <h1 style="text-align: center">Welcome to register page!</h1>
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
              name:'',
              password:'',
              phone:''
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
  input{
    border: 1px solid #ccc;
    padding: 7px 0px;
    border-radius: 3px;
    padding-left:5px;
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
