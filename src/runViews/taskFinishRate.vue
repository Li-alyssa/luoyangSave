<!-- // 页面文件中使用，如index.vue中 -->
<template>
  <!-- echarts -->
  <div>
    <!-- <h1>{{ subtime }} ,{{ subid }}</h1> -->
    <div id="taskFinishRate" class="main_container"></div>
  </div>
</template>
  <script>
import requests from "../api/request";
export default {
  name: "taskFinishRate",
  data() {
    return {
      week: [],
      LineChart: null,
      LineChartOption: {
        title: {
          text: "任务分配效率",
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
            rotate: 30, //-30度角倾斜显示
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "",
            type: "line",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("taskFinishRate")
    );
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data3 = {};
      data3["type"] = "live";
      let result3 = await requests.post("/tasktable/getAllocationrat", data3);
      // console.log(result);
      let arr5 = [];
      result3.data.forEach((e) => {
        arr5.push(e.time);
      });
      let arr6 = [];
      result3.data.forEach((e) => {
        arr6.push(e.rate);
      });
      this.LineChartOption.xAxis.data = arr5;
      this.LineChartOption.series[0].data = arr6;
      this.LineChart.setOption(this.LineChartOption);
    },
  },
};
</script>
  <style scoped>
.main_container {
  /* margin-left: 10px; */
  margin-top: 10px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  /* background-color: #111; */
}
</style>
  