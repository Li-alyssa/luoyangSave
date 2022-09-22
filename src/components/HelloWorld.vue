<template>
  <div class="app-container">
    <el-card>
      <el-table
        :data="tableData"
        style="width: 50%; margin-left: auto; margin-right: auto"
      >
        <el-table-column label="序号" type="index" align="center" width="180">
        </el-table-column>
        <el-table-column label="时间" prop="time" width="width">
          <template slot-scope="scope">
            <span> {{ scope.row.time.slice(0, 10) }} </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="width">
          <template slot-scope="scope">
            <!-- <el-button
              size="mini"
              icon="el-icon-download"
              @click="handleDownload(scope.$index, scope.row)"
              >下载</el-button
            > -->
            <el-button
              size="mini"
              icon="el-icon-download"
              @click="handleBack(scope.$index, scope.row)"
            >
              回放</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="50%"
        center
      >
        <div class="echarts">
          <Charts1 :time="time" />
        </div>
        <div class="echarts">
          <Charts2 :time="time" />
        </div>
        <div class="echarts">
          <Charts3 :time="time" />
        </div>
        <div class="echarts">
          <Charts4 />
        </div>
        <!-- <div class="echarts">
          <Charts5 />
        </div> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
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
</template>

<script>
import requests from "../api/request";
import Charts1 from "../views/charts1.vue";
import Charts2 from "../views/charts2.vue";
import Charts3 from "../views/charts3.vue";
import Charts4 from "../views/charts4.vue";
import Charts5 from "../views/charts5.vue";
export default {
  name: "",
  components: {
    Charts1,
    Charts2,
    Charts3,
    Charts4,
    Charts5,
  },
  data() {
    return {
      centerDialogVisible: false,
      tableData: [],
      page: 1,
      pageSize: 3,
      total: 0,
      time: "",
    };
  },
  mounted() {
    // this.getPageList();
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
      console.log(result);
      this.tableData = result.data;
    },
    handleBack(index, row) {
      this.centerDialogVisible = true;
      this.time = row.time.slice(0, 10);
      let data = new FormData();
      data.append("time", row.time.slice(0, 10));
      let result = requests.post("/msk/chain/getchain", data);
      // console.log(result);
    },
  },
  components: { Charts1, Charts2, Charts3, Charts4, Charts5 },
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
</style>