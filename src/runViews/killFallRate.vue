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
          text: "杀伤链失败率",
        },
        legend: {
          // data: ["侦察飞机死亡数量"],
        },
        tooltip: {
          show: true, // 是否显示
        },
        xAxis: {
          type: "category",
          data: [1, 2, 3, 4, 5, 6, 7],
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
            name: "杀伤链失败率",
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
      let result = await requests.post("/chainsuccessful/find");
      console.log(result.data);
      this.LineChartOption.series[0].data = result.data;
      //   this.LineChartOption.xAxis.data = arr1;

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