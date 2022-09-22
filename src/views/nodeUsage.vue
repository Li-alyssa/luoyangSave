<template>
  <div>
    <!-- echarts -->
    <div id="nodeusage" class="main_container"></div>
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
          text: "体系节点使用率",
        },
        legend: {
          data: ["侦察节点使用数量", "攻击节点使用数量", "决策节点使用数量"],
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
            name: "侦察节点使用数量",
            type: "bar",
            data: [],
          },
          {
            name: "攻击节点使用数量",
            type: "bar",
            data: [],
          },
          {
            name: "决策节点使用数量",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(document.getElementById("nodeusage"));
      this.getChartsList();
    });

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = new FormData();
      data.append("time", this.subtime);
      let result = await requests.post("/nodeusage/history/get", data);
      console.log(result.data);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.time);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.scounterUse);
      });
      let arr3 = [];
      result.data.forEach((e) => {
        arr3.push(e.fighterUse);
      });
      let arr4 = [];
      result.data.forEach((e) => {
        arr4.push(e.attackerUse);
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