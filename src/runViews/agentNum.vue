<template>
  <div>
    <!-- echarts -->
    <div id="agentNum" class="main_container"></div>
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
          text: "异构装备数量",
          left: "center",
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
      this.LineChart = this.$echarts.init(document.getElementById("agentNum"));
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/agentnum/get");
      // console.log(result.data);
      var reg = new RegExp("number", "g"); //g表示全部的
      //         // //将json转换为字符串   将被替换内容替换为替换内容
      let str = JSON.stringify(result.data).replace(reg, "value");
      let data = JSON.parse(str);
      var reg2 = new RegExp("type", "g"); //g表示全部的
      //         // //将json转换为字符串   将被替换内容替换为替换内容
      let str2 = JSON.stringify(data).replace(reg2, "name");
      let data2 = JSON.parse(str2);
      let arr = [];
      data2.forEach((e) => {
        arr.push(e.name);
      });
      //   this.LineChartOption.xAxis.data = arr;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = data2;
      this.LineChartOption.xAxis.data = arr;
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