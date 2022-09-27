<template>
  <div id="killRate" class="main_container"></div>
</template>
        
        
        <script>
import requests from "../api/request";
export default {
  props: ["time", "id"],
  data() {
    return {
      subtime: this.time,
      subid: this.id,

      LineChartOption: {
        title: {
          text: "杀伤链效率",
        },
        legend: {
          // data: ["侦察飞机死亡数量"],
        },
        tooltip: {
          show: true, // 是否显示
        },
        xAxis: {
          type: "category",
          data: [],
          axisLabel: {
            interval: 0, //横轴信息全部显示
            rotate: 30, //-30度角倾斜显示
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "到当前时刻击毁目标数",
            type: "bar",
            data: [1, 2, 5, 6, 3, 6, 8],
          },
          {
            name: "到当前时刻杀伤链累计数量 ",
            type: "bar",
            data: [1, 2, 13, 4, 6, 8, 1],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(document.getElementById("killRate"));
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      // let data = {};
      // data["id"] = this.id;
      // data["time"] = this.time;

      // let result = await requests.post(
      //   "/killchainefficiency/history/get",
      //   data
      // );
      // console.log(result.data);
      // //   service.post("/back/statistic/flowStatistic").then((response) => {
      // //     if (response.code != 0) {
      // //     } else {
      // // this.LineChartOption.legend.data = response.data.orgFlowRank;
      // this.LineChartOption.series[0].data = arr2;
      // this.LineChartOption.series[1].data = arr3;
      // this.LineChartOption.series[2].data = arr4;
      //   this.LineChartOption.series[1].data = response.data.busFlow7;
      this.LineChart.setOption(this.LineChartOption);
      // console.log(response.data.orgFlowRank);
      // }
      //   }
      //   );
    },
  },
};
</script>

<style scoped>
.main_container {
  width: 100%;
  height: 500px;
  margin-top: 10px;
  overflow: hidden;
}
</style>