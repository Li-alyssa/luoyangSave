<template>
  <div>
    <!-- echarts -->
    <div id="killFinishTime" class="main_container"></div>
  </div>
</template>
  <script>
import requests from "../api/request";
export default {
  data() {
    return {
      LineChartOption: {
        title: {
          text: "杀伤链闭合时间",
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
            name: "",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("killFinishTime")
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
      let result3 = await requests.post("/tasktable/getClose", data3);
      // console.log(result);
      let arr5 = [];
      result3.data.forEach((e) => {
        arr5.push(e.time);
      });
      let arr6 = [];
      result3.data.forEach((e) => {
        arr6.push(e.closetime);
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
  width: 100%;
  height: 500px;
  margin-top: 10px;
  overflow: hidden;
}
</style>