<template>
  <div>
    <!-- echarts -->
    <div id="equipmentParameters" class="main_container"></div>
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
        tooltip: {
          trigger: "item",
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
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(
        document.getElementById("equipmentParameters")
      );
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/equipmentparameters/get");
      // console.log(result.data);
      // console.log(Object.values(result.data[0]));
      var arr1 = Object.values(result.data[0]);
      // console.log(Object.keys(result.data[0]));
      var arr2 = Object.keys(result.data[0]);
      var newArr = [];
      for (var i = 0; i < arr1.length; i++) {
        newArr.push({
          name: arr2[i],
          value: arr1[i],
          type: "bar",
        });
      }

      // console.log(newArr);
      this.LineChartOption.xAxis.data = arr2;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = newArr;
      // this.LineChartOption.series[0].data.name = result.data.key;
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
  margin-top: 10px;
  overflow: hidden;
}
</style>
