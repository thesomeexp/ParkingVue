<template>
  <div>
    <h1 style="text-align: center">停车场列表</h1>
    <div>
        <el-input class="search" style="width: 200px;left: 150px" v-model="input" placeholder="请输入你要查找的停车场id"></el-input>
        <el-button style="margin-left: 150px" type="primary" icon="el-icon-search" >搜索</el-button>
        <p></p>
      <el-table :data="information" border style="width: 70%;position: relative;margin-left: 10%"
                :header-cell-style="{'text-align':'center'}"
                :cell-style="{'text-align':'center'}">
        <el-table-column fixed="left" prop="id" label="停车场编号" width="120"></el-table-column>
        <el-table-column prop="name" label="停车场名称" width="120"></el-table-column>
        <el-table-column prop="content" label="停车场描述" width="120"></el-table-column>
        <el-table-column prop="longitude" label="经度" width="120"></el-table-column>
        <el-table-column prop="latitude" label="纬度" width="120"></el-table-column>
        <el-table-column prop="uid" label="停车用户编号" width="120"></el-table-column>
        <el-table-column prop="state" label="状态" width="120"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="big">查看</el-button>
            <el-button type="text" size="big">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
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
              <td><a href="#/infos/1">详情</a></td>
            </tr>
          </table>
      <a href="">添加</a><br>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Park",
    data() {
      return {
        information: [],
        input: ''
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      findAll() {
        this.$http.get("http://rap2.taobao.org:38080/app/mock/257039/infos/findAll?location=231").then((res) => {
          this.information = res.data.data.infos; //获取RAP2中data里的infos中的数据
        });
      },
    },
    components: {},
    created() {
      this.findAll();
    },
  }
</script>

<style scoped>
  .el-table-column{
    text-align: center;
  }
  .el-table{
    text-align: center;
  }
  .search>>>.el-input__inner{
    style: "width: 200px;left: 20px"
  }
</style>
