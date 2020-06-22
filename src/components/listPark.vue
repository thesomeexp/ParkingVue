<template>
  <div>
    <h1 style="text-align: center">停车场列表</h1>
    <div style="margin-left: 100px">
        <el-input class="search"
                  style="width: 200px;left: 150px"
                  clearable
                  v-model.trim="location"
                  placeholder="输入坐标寻找附近的停车位">
        </el-input>
        <el-button style="margin-left: 150px"
                   type="primary"
                   icon="el-icon-search"
                   @click="search">
                  查询
        </el-button>
        <br>
        <br>
      <el-table :data="information.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                border
                style="width: fit-content;position: relative;margin-left: 10%"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}"
      >
        <el-table-column prop="id" label="ID" width="120"></el-table-column>
        <el-table-column prop="name" label="停车场名称" width="120"></el-table-column>
        <el-table-column prop="content" label="图片" width="120"></el-table-column>
        <el-table-column prop="longitude" label="停车场ID" width="120"></el-table-column>
        <el-table-column prop="uid" label="停车用户编号" width="120"></el-table-column>
        <el-table-column prop="state" label="状态" width="120"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" @click="handleWatch(scope.row.id)" size="big">查看{{scope.row.id}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <br>
    <el-pagination
      style="margin-left: 40%"
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
    name: "listPark",
    data() {
      return {
        location: '',
        id: '',
        information: [],
        currentPage: 1,  //初始页
        pageSize: 5,    //每页的数据
      }
    },


    methods: {
      handleWatch(id){
        console.log(id)
        this.information={
          id:id.id,
          name:id.name,
          infosubmitdate:id.infosubmitdate,
          state:id.state,
          stateupdatedate:id.stateupdatedate
        }
        this.$router.push({
          path:'/findById/',
          query:{id: id}
        })
      },

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

      findAll() {
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
        this.$http.get("http://localhost:9001/infos-api/admin/infos?pagesize=100",
          {
            headers: {
              'Authorization': 'Bearer ' + this.accessToken
            },
            // params: {
            //   pagesize : that.information.data.data
            // }
          }).then((res) => {
          console.log(res.data)
          that.information = res.data.data.list;
        });
      },


      search: function () {
        let timestamp = Date.parse(new Date());
        let that = this
        this.$http.get("http://localhost:9001/infos-api/infos",
          {
            params: {location: this.location},
            headers: {timestamp: timestamp}
          }).then(res => {
          that.information = res.data.data.infos;
          console.log(res.data.status)
        })
      },
      },


      watch: {
        $route() {
          this.getData(); //当对象改变，执行操作获取新数据
        }
      },


    created() {
      this.findAll();
    },
  }
</script>

<style scoped>
</style>
