<template>
    <div>
      <h1 style="text-align: center">查看提交详情</h1>
      <el-table :data="information.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                border
                style="width: fit-content;position: relative;margin: auto"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}"
      >
        <el-table-column prop="id" label="评论编号" width="70%"></el-table-column>
        <el-table-column prop="uid" label="评论用户编号" width="70%"></el-table-column>
        <el-table-column prop="pid" label="停车场编号" width="70%"></el-table-column>
        <el-table-column prop="content" label="评论内容" width="70%"></el-table-column>
        <el-table-column prop="submitdate" label="评论时间" width="70%">
          <template slot-scope="scope">{{ scope.row.submitdate | formatDate}}</template>
        </el-table-column>
        <el-table-column label="操作" width="70%">
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
    export default {
        name: "listInfoImage",

      data(){
        return{
          information:[],
          currentPage: 1,  //初始页
          pageSize: 5,    //每页的数据
        }
      },


      methods:{
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


      },


      created() {
      }
    }
</script>

<style scoped>

</style>
