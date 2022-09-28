<template>
  <div>
    <!-- echarts -->
    <div id="killRecombine" class="main_container"></div>
  </div>
</template>
      
      
      <script>
import requests from "../api/request";
export default {
  data() {
    return {
      LineChartOption: {
        title: {
          text: "杀伤链的重组率",
        },
        legend: {
          // data: [],
        },
        tooltip: {
          show: true, // 是否显示
        },
        xAxis: {
          type: "category",
          data: ["2022-09-27 15:00:00"],
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
            name: "杀伤链的重组率",
            type: "bar",
            data: [1],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("killRecombine")
    );
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      // let result = await requests.get("/chainrecombinationrat/find");
      // console.log(result.data);
      //   let arr1 = [];
      //   result.data.forEach((e) => {
      //     arr1.push(e.time);
      //   });
      //   let arr2 = [];
      //   result.data.forEach((e) => {
      //     arr2.push(e.scounterNum);
      //   });
      //   this.LineChartOption.xAxis.data = arr1;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      // this.LineChartOption.series[0].data = result.data;

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
  margin-top: 10px;
}
</style>