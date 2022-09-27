<template>
  <div class="app-container">
    <el-header>XXX数据可视化系统</el-header>

    <el-main>
      <!-- 实时按钮 -->
      <div class="realTime">
        <el-button
          type="danger"
          @click="handleRunTime"
          icon="el-icon-s-data"
          style="width: 300px; height: 50px"
          >实时</el-button
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
            <el-table-column label="时间" prop="time" width="width">
              <template slot-scope="scope">
                <span> {{ scope.row.time.slice(0, 10) }} </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="width">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="handleHistory(scope.$index, scope.row)"
                  icon="el-icon-time"
                  >回放</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <!-- <el-pagination
        :total="total"
        :current-page="1"
        :page-size="3"
        @current-change="getPageList"
        layout="prev, pager, next, jumper, total"
        style="margin-top: 20px; text-align: center"
      ></el-pagination> -->
        </el-card>
      </div>
    </el-main>
    <el-footer></el-footer>
  </div>
</template>

<script>
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
      pageSize: 3,
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
    // async getPageList(pager = 1) {
    //   this.page = pager;
    //   //解构出参数
    //   //当向服务器发送请求时，函数需要携带参数，应在data中初始化两个字段，代表给服务器传递参数
    //   const { page, pageSize } = this;
    //   let result = await this.$API.reqPageList(page, pageSize);
    //   console.log(result.data);
    //   this.tableData = result.data.tableList.list;
    //   this.total = result.data.tableList.total;
    //   console.log(this.total);
    // },
    // handleDownload(index, row) {
    //   // console.log(index, row.times);
    //   console.log(row.times);
    //   window.open(`/api/mskCommand/mskCommand/getdata?time=${row.times}`);
    //   // this.$API.reqDownload(row.times);
    // },
    async getTimeList() {
      let result = await this.$API.reqTimeList();
      // console.log(result.data[0].id);
      // console.log(result.data[0].time);
      (this.reciId = result.data[0].id),
        (this.receTime = result.data[0].time),
        (this.tableData = result.data);
      console.log(this.reciId, this.receTime);
    },
    handleBack(index, row) {
      this.centerDialogVisible = true;
      this.time = row.time.slice(0, 10);
      let data = new FormData();
      data.append("time", row.time.slice(0, 10));
      let result = requests.post("/msk/chain/getchain", data);
    },
    handleHistory(index, row) {
      // this.$router.push(`/ChartsPage/${row.time.slice(0, 10)}`);
      this.$router.push({
        name: "ChartsPage",
        params: {
          id: this.reciId,
          time: this.receTime,
        },
      });
    },
    handleRunTime() {
      this.$router.push("/RunTime");
    },
  },
};
</script>

<style>
.echarts {
  /* background-color: red; */
  width: 50%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
}
.el-header,
.el-footer {
  background-color: #003366;
  color: #e9eef3;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  /* text-align: center; */
  line-height: 160px;
}
.box1 {
  margin: 10px auto;
  width: 75%;
  height: 700px;
  /* background-color: green; */
}
</style>