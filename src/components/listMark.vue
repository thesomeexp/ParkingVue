<template>
    <div>
      <h1 style="text-align: center">查ID,搜评论</h1>
      <el-input class="search"
                style="width: max-content;margin-left: 19%"
                clearable
                v-model.trim="pid"
                placeholder="输入停车场ID查询评论">
      </el-input>
      <el-button
                 type="primary"
                 icon="el-icon-search"
                 @click="search">
        查询
      </el-button>
      <br>
      <br>

      <el-table :data="information.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                border
                v-loading="loading"
                style="width: fit-content;position: relative;margin:0 19%"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}"
      >
        <el-table-column prop="id" label="评论编号" width="105%"></el-table-column>
        <el-table-column prop="uid" label="评论用户编号" width="106%"></el-table-column>
        <el-table-column prop="pid" label="停车场编号" width="105%"></el-table-column>
        <el-table-column prop="content" label="评论内容" width="105%"></el-table-column>
        <el-table-column prop="easytofind" label="评价等级" width="105%"></el-table-column>
        <el-table-column prop="submitdate" label="评论时间" width="105%">
          <template slot-scope="scope">{{ scope.row.submitdate | formatDate}}</template>
        </el-table-column>
        <el-table-column label="操作" width="105%">
          <template slot-scope="scope">
            <el-button type="text" @click="deleteId(scope.row.id)" size="big">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination
        style="margin-left: 30%"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="information.length">
      </el-pagination>
      <router-view/>
    </div>
</template>

<script>
    import {formatDate} from '@/utils/filters/formatDate.js'
    export default {
        name: "listMarkById",
        data(){
          return{
            pid:'',         //停车场id
            id:'',          //评论id
            information:[],
            currentPage: 1,  //初始页
            pageSize: 5,    //每页的数据
          }
        },


        filters: {
          formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
          }
        },



        methods: {
          //初始页currentPage,初始每页数据pageSize
          handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize); //每页下拉显示数据
          },

          handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
            console.log(this.currentPage); //点击第几页
            console.log(this.information.length)
          },


          //根据PID查找相应停车场评论
          search: function () {
            // 获取本地token, 判断是否登录
            let localStorageToken = localStorage.getItem("accessToken")
            // 如果本地token不为空则设置到请求头去
            if (localStorageToken != null) {
              this.accessToken = localStorageToken
            } else {
              alert("未登录")
              return
            }
            let that = this;
            this.$http.get("http://localhost:9001/review-api/review/" + this.pid, {
              headers: {'Authorization': 'Bearer ' + this.accessToken}
            }).then(res => {
              console.log(res.data.data.list)
              that.information = res.data.data.list

            })
          },


          //列出我的评论
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
            this.$http.get("http://localhost:9001/review-api/review?page=1&pagesize=100",
              {
                headers: {
                  'Authorization': 'Bearer ' + this.accessToken
                }
              }).then((res) => {
              console.log(res.data.data)
              that.information = res.data.data;
            });
          },



          //删除评论
          deleteId: function (id) {
            // 获取本地token, 判断是否登录
            let localStorageToken = localStorage.getItem("accessToken")
            // 如果本地token不为空则设置到请求头去
            if (localStorageToken != null) {
              this.accessToken = localStorageToken
            } else {
              alert("未登录")
              return
            }
            let that = this;
            this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$http.delete("http://localhost:9001/review-api/admin/review/" + id, {
                headers: {'Authorization': 'Bearer ' + this.accessToken}
              }).then(res => {
                console.log(res.data)
              })
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });

          },

        },



        created() {
          this.list();
        }
    }
</script>

<style scoped>

</style>
