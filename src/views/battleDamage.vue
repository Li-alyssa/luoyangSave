<template>
  <div>
    <!-- echarts -->
    <div id="battleDamage" class="main_container"></div>
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
          text: "作战装备参数",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: null, name: "reconRadius" },
              { value: null, name: "reconSpeed" },
              { value: 0, name: "decSpeed" },
              { value: 2, name: "attSpeed" },
              { value: 12, name: "attRadius" },
              { value: 5, name: "attNradius" },
              { value: 12, name: "decRadius" },
              { value: 1, name: "decNum" },
              { value: 16, name: "attNum" },
              { value: 200, name: "clusters" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(
        document.getElementById("battleDamage")
      );
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/equipmentparameters/get");
      console.log(result.data);
      //   this.LineChartOption.xAxis.data = arr;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      //   this.LineChartOption.series[0].data.value = result.data.value;
      //   this.LineChartOption.series[0].data.name = result.data.key;
      //   this.LineChartOption.series[1].data = arr3;
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