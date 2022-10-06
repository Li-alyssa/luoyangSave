<template>
  <div>
    <!-- echarts -->
    <div id="taskCloseEff" class="main_container"></div>
  </div>
</template>
<script>
import requests from "../../api/request";
export default {
  props: ["id"],
  data() {
    return {
      LineChartOption: {
        title: {
          text: "杀伤链闭合效率",
          padding: 5,
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          axisLabel: {
            interval: 0, //横轴信息全部显示
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "",
            type: "line",
            stack: "Total",
            data: [],
            smooth: true,
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(
        document.getElementById("taskCloseEff")
      );
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = {};
      data["timeid"] = this.id;
      data["type"] = "history";
      let result = await requests.post("/tasktable/getCloseEff", data);
      console.log(result);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.time);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.rate);
      });
      this.LineChartOption.xAxis.data = arr1;
      this.LineChartOption.series[0].data = arr2;
      this.LineChart.setOption(this.LineChartOption);
    },
  },
};
</script>
        <style scoped>
.main_container {
  width: 100%;
  height: 600px;
  margin-top: 10px;
  overflow: hidden;
}
</style>