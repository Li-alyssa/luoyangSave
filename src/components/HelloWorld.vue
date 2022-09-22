<template>
  <div class="app-container">
    <el-header>XXX数据可视化系统</el-header>

    <el-main>
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
                <!-- <el-button
              size="mini"
              icon="el-icon-download"
              @click="handleDownload(scope.$index, scope.row)"
              >下载</el-button
            > -->
                <el-button
                  icon="el-icon-download"
                  @click="handleBack(scope.$index, scope.row)"
                >
                  回放</el-button
                >

                <el-button
                  type="primary"
                  @click="handleHistory(scope.$index, scope.row)"
                  icon="el-icon-time"
                  >历史</el-button
                >
                <el-button
                  type="primary"
                  @click="outerVisible = true"
                  icon="el-icon-s-data"
                  >实时</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 回放dialog -->
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
          <!-- 历史dialog -->
          <el-dialog title="勾选所需类别" :visible.sync="outerVisible">
            <el-dialog
              width="50%"
              title="图表"
              :visible.sync="innerVisible"
              append-to-body
            >
              <TaskFinishRate :time="time" v-show="show.show1 === true" />
              <!-- <Charts4 v-show="show.show2 === true" /> -->
              <TaskInterfereRate :time="time" v-show="show.show2 === true" />
              <TargetNum :time="time" v-show="show.show3 === true" />
              <NodeChargeNum :time="time" v-show="show.show4 === true" />
              <NodeUsage :time="time" v-show="show.show5 === true" />
              <BattleDamage :time="time" v-show="show.show6 === true" />
              <AgentNum :time="time" v-show="show.show7 === true" />
              <EquipmentParameters :time="time" v-show="show.show8 === true" />
            </el-dialog>

            <el-checkbox-group v-model="checkList">
              <el-checkbox
                label="任务分配完成率"
                @change="checkboxGroup1"
              ></el-checkbox>
              <el-checkbox
                label="干扰成功率"
                :checked="checked"
                @change="checkboxGroup2"
              ></el-checkbox>
              <el-checkbox
                label="发现目标树"
                @change="checkboxGroup3"
              ></el-checkbox>
              <el-checkbox
                label="作战智能体数量变化"
                @change="checkboxGroup4"
              ></el-checkbox>
              <el-checkbox
                label="体系节点使用率"
                @change="checkboxGroup5"
              ></el-checkbox>
              <el-checkbox
                label="作战装备参数"
                @change="checkboxGroup6"
              ></el-checkbox>
              <el-checkbox
                label="异构装备数量"
                @change="checkboxGroup7"
              ></el-checkbox>
              <el-checkbox label="战损" @change="checkboxGroup8"></el-checkbox>
            </el-checkbox-group>

            <div slot="footer" class="dialog-footer">
              <el-button @click="outerVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="
                  innerVisible = true;
                  outerVisible = false;
                "
                >确定</el-button
              >
            </div>
          </el-dialog>
          <!-- 实时dialog -->
          <!-- <el-dialog title="勾选所需类别" :visible.sync="outerVisible">
            <el-dialog
              width="50%"
              title="图表"
              :visible.sync="innerVisible"
              append-to-body
            >
              <Charts4 />
            </el-dialog>

            <el-checkbox-group v-model="checkList">
              <el-checkbox label="任务分配完成率"></el-checkbox><br />
              <el-checkbox label="干扰成功率"></el-checkbox><br />
              <el-checkbox label="发现目标树"></el-checkbox><br />
              <el-checkbox label="作战智能体数量变化"></el-checkbox><br />
              <el-checkbox label="体系节点使用率"></el-checkbox><br />
              <el-checkbox label="异构装备数量"></el-checkbox><br />
              <el-checkbox label="禁用" disabled></el-checkbox><br />
              <el-checkbox label="选中且禁用" disabled></el-checkbox><br />
            </el-checkbox-group>

            <div slot="footer" class="dialog-footer">
              <el-button @click="outerVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="
                  innerVisible = true;
                  outerVisible = false;
                "
                >确定</el-button
              >
            </div>
          </el-dialog> -->
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
import requests from "../api/request";
import Charts1 from "../views/charts1.vue";
import Charts2 from "../views/charts2.vue";
import Charts3 from "../views/charts3.vue";
import Charts4 from "../views/charts4.vue";
import Charts5 from "../views/charts5.vue";
import TaskFinishRate from "../views/taskFinishRate.vue";
import TaskInterfereRate from "../views/taskInterfereRate.vue";
import TargetNum from "../views/targetNum.vue";
import NodeChargeNum from "../views/nodeChargeNum.vue";
import NodeUsage from "../views/nodeUsage.vue";
import AgentNum from "../views/agentNum.vue";
import BattleDamage from "../views/battleDamage.vue";
import EquipmentParameters from "../views/equipmentParameters.vue";

export default {
  name: "",
  components: {
    Charts1,
    Charts2,
    Charts3,
    Charts4,
    Charts5,
    TaskFinishRate,
    TaskInterfereRate,
    TargetNum,
    NodeChargeNum,
    NodeUsage,
    AgentNum,
    BattleDamage,
    EquipmentParameters,
  },
  data() {
    return {
      activeCharts: 0,
      centerDialogVisible: false,
      tableData: [],
      page: 1,
      pageSize: 3,
      total: 0,
      time: "",
      outerVisible: false,
      innerVisible: false,
      checkList: [],
      show: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
      },
      checked: true,
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
    handleHistory(index, row) {
      this.outerVisible = true;
      this.time = row.time.slice(0, 10);
      // console.log(result);
    },
    checkboxGroup1(row) {
      console.log(row);
      this.show.show1 = row;
    },
    checkboxGroup2(row) {
      console.log(row);
      this.show.show2 = row;
    },
    checkboxGroup3(row) {
      console.log(row);
      this.show.show3 = row;
    },
    checkboxGroup4(row) {
      console.log(row);
      this.show.show4 = row;
    },
    checkboxGroup5(row) {
      console.log(row);
      this.show.show5 = row;
    },
    checkboxGroup6(row) {
      console.log(row);
      this.show.show6 = row;
    },
    checkboxGroup7(row) {
      console.log(row);
      this.show.show7 = row;
    },
    checkboxGroup8(row) {
      console.log(row);
      this.show.show8 = row;
    },
  },
  components: {
    Charts1,
    Charts2,
    Charts3,
    Charts4,
    Charts5,
    TaskFinishRate,
    TaskInterfereRate,
    TargetNum,
    NodeChargeNum,
    NodeUsage,
    AgentNum,
    BattleDamage,
    EquipmentParameters,
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