<template>
  <div class="app-container">
    <el-header>马赛克数据可视化演示验证</el-header>
    <el-main>
      <!-- 实时按钮 -->
      <div class="realTime">
        <el-button
          type="danger"
          @click="handleRunTime"
          icon="el-icon-s-data"
          style="width: 300px; height: 50px; margin-bottom: 20px"
          >实时</el-button
        >
      </div>

      <div>
        <el-button
          type="primary"
          @click="handleCompared"
          icon="el-icon-s-data"
          style="width: 300px; height: 50px"
          >最近两次数据对比</el-button
        >
      </div>
      <div class="box1">
        <el-card>
          <el-table
            :data="tableData"
            style="width: 80%; margin-left: auto; margin-right: auto"
          >
            <el-table-column
              label="序号"
              type="index"
              align="center"
              width="180"
            >
            </el-table-column>
            <el-table-column label="时间" prop="startTime" width="width">
              <template slot-scope="scope">
                <span> {{ scope.row.startTime }} </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="width">
              <template slot-scope="scope">
                <!-- <el-button
                  type="primary"
                  @click="history(scope.row)"
                  icon="el-icon-time"
                  >历史</el-button
                > -->
                <el-button
                  type="primary"
                  @click="handleHistory(scope.$index, scope.row)"
                  icon="el-icon-time"
                  >回放</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-size="pageSize"
            :total="total"
            layout="prev, pager, next, jumper"
            style="margin-top: 20px; text-align: center"
          >
          </el-pagination>
        </el-card>
      </div>
    </el-main>
    <el-footer></el-footer>
  </div>
</template>

<script>
import requests from "../api/request";
export default {
  name: "",
  components: {},
  data() {
    return {
      timeVisible: false,
      activeCharts: 0,
      centerDialogVisible: false,
      tableData: [],
      reciId: "",
      receTime: "",
      page: 1,
      pageSize: 10,
      total: 0,
      time: "",
    };
  },
  mounted() {
    // this.getPageList();
    this.checked = false;
    this.getTimeList();
  },
  methods: {
    async getTimeList() {
      let data = {};
      data["page"] = this.page;
      data["size"] = this.pageSize;
      let result = await requests.post("/timetable/getTime", data);
      console.log(result);
      this.total = result.data.total;
      this.tableData = result.data.list;
    },

    handleHistory(index, row) {
      // this.$router.push(`/ChartsPage/${row.time.slice(0, 10)}`);
      this.$router.push({
        name: "ChartsPage",
        query: {
          id: row.id,
          time: row.startTime,
        },
      });
    },
    handleCurrentChange(val) {
      console.log(val);
      this.$set(this, "page", val);
      this.getTimeList();
    },
    // history(row) {
    //   // console.log(row);
    //   this.$router.push({
    //     name: "historyPage",
    //     query: {
    //       id: row.id,
    //       time: row.startTime,
    //     },
    //   });
    // },
    handleCompared() {
      this.$router.push("/Compared");
    },
    handleRunTime() {
      this.$router.push("/RunTime");
    },
  },
};
</script>

<style>
.el-header {
  background-color: #003366;
  color: #e9eef3;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #003366;
  color: #e9eef3;
  text-align: center;

  position: absolute;
  bottom: 0;
  width: 100%;
}
.el-main {
  background-color: #e9eef3;
  /* text-align: center; */
  height: calc(100vh - 60px);
  /* line-height: 160px; */
}
.box1 {
  margin: 10px auto;
  width: 75%;
  /* height: 700px; */
  /* background-color: green; */
}
</style>