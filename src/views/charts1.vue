<template>
  <div>
    <!-- echarts -->
    <div id="main" class="main_container"></div>
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
          text: "战损占比",
        },
        legend: {
          data: ["蓝色战损", "红色战损"],
        },
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "蓝色战损",
            type: "bar",
            data: [],
          },
          {
            name: "红色战损",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(document.getElementById("main"));
    this.getChartsList();
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = new FormData();
      data.append("time", this.subtime);
      let result = await requests.post("/msk/chain/getLoss", data);
      console.log(result.data);
      let arr = [];
      result.data.forEach((e) => {
        arr.push(e.time.slice(0, 10));
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.blueloss);
      });
      let arr3 = [];
      result.data.forEach((e) => {
        arr3.push(e.redloss);
      });
      this.LineChartOption.xAxis.data = arr;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = arr2;
      this.LineChartOption.series[1].data = arr3;
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