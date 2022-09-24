<template>
  <div>
    <!-- echarts -->
    <div id="nodeChargeNum" class="main_container"></div>
  </div>
</template>
          
          
          <script>
import requests from "../api/request";
export default {
  props: ["time"],
  data() {
    return {
      subtime: this.time,
      LineChartOption: {
        title: {
          text: "杀伤链累计数量",
        },
        legend: {
          data: ["侦察飞机死亡数量"],
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
            name: "侦察飞机死亡数量",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(
        document.getElementById("nodeChargeNum")
      );
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = new FormData();
      data.append("time", this.subtime);
      let result = await requests.post("/nodecharge/history/get", data);
      // console.log(result.data);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.time);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.scounterNum);
      });
      let arr3 = [];
      result.data.forEach((e) => {
        arr3.push(e.fighterNum);
      });
      let arr4 = [];
      result.data.forEach((e) => {
        arr4.push(e.attackerNum);
      });
      this.LineChartOption.xAxis.data = arr1;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = arr2;
      this.LineChartOption.series[1].data = arr3;
      this.LineChartOption.series[2].data = arr4;
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
  overflow: hidden;
}
</style>