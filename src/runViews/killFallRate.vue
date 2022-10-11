<template>
  <div>
    <!-- echarts -->
    <div id="killFallRate" class="main_container"></div>
  </div>
</template>
        
<script>
import requests from "../api/request";
export default {
  data() {
    return {
      LineChartOption: {
        title: {
          text: "杀伤网复杂度",
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
      document.getElementById("killFallRate")
    );
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = {};
      data["type"] = "live";
      let result = await requests.post("/killchaintable/getComplexity", data);
      // console.log(result);
      let arr5 = [];
      result.data.forEach((e) => {
        arr5.push(e.time);
      });
      let arr6 = [];
      result.data.forEach((e) => {
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
  width: 100%;
  height: 500px;
  margin-top: 10px;
  overflow: hidden;
}
</style>