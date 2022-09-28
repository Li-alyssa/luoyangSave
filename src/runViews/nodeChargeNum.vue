<template>
  <div>
    <!-- echarts -->
    <div id="nodeChargeNum" class="main_container"></div>
  </div>
</template>
    
    
    <script>
import requests from "../api/request";
export default {
  data() {
    return {
      LineChartOption: {
        title: {
          text: "作战智能体数量变化",
        },
        legend: {
          // data: [],
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
            name: "侦察飞机死亡数量",
            type: "bar",
            data: [],
          },
          {
            name: "决策飞机死亡数量",
            type: "bar",
            data: [],
          },
          {
            name: "攻击飞机死亡数量",
            type: "bar",
            data: [],
          },
          {
            name: "scounterQuantity",
            type: "bar",
            data: [],
          },
          {
            name: "decisionQuantity",
            type: "bar",
            data: [],
          },
          {
            name: "attackerQuantity",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("nodeChargeNum")
    );
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/nodecharge/current/get");
      // console.log(result.data);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.time);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.scounterNum);
      });
      let arr3 = [];
      result.data.forEach((e) => {
        arr3.push(e.fighterNum);
      });
      let arr4 = [];
      result.data.forEach((e) => {
        arr4.push(e.attackerNum);
      });
      let arr5 = [];
      result.data.forEach((e) => {
        arr5.push(e.scounterQuantity);
      });
      let arr6 = [];
      result.data.forEach((e) => {
        arr6.push(e.decisionQuantity);
      });
      let arr7 = [];
      result.data.forEach((e) => {
        arr7.push(e.attackerQuantity);
      });
      this.LineChartOption.xAxis.data = arr1;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = arr2;
      this.LineChartOption.series[1].data = arr3;
      this.LineChartOption.series[2].data = arr4;
      this.LineChartOption.series[3].data = arr5;
      this.LineChartOption.series[4].data = arr6;
      this.LineChartOption.series[5].data = arr7;
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