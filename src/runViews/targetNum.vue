<template>
  <div>
    <!-- echarts -->
    <div id="targetNum" class="main_container"></div>
  </div>
</template>
  
  
  <script>
import requests from "../api/request";
export default {
  data() {
    return {
      LineChartOption: {
        title: {
          text: "发现目标数量",
        },
        legend: {
          data: ["预警雷达数量", "雷达车数量", "导弹车数量"],
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
            name: "预警雷达数量",
            type: "bar",
            data: [],
          },
          {
            name: "雷达车数量",
            type: "bar",
            data: [],
          },
          {
            name: "导弹车数量",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    //  执行echarts方法
    this.LineChart = this.$echarts.init(document.getElementById("targetNum"));
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/targetnum/current/get");
      // console.log(result.data);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.time);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.wrader);
      });
      let arr3 = [];
      result.data.forEach((e) => {
        arr3.push(e.radar);
      });
      let arr4 = [];
      result.data.forEach((e) => {
        arr4.push(e.missile);
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
  margin-top: 10px;
  overflow: hidden;
}
</style>