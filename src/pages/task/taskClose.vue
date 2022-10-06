<template>
  <div>
    <!-- echarts -->
    <div id="taskClose" class="main_container"></div>
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
          text: "杀伤链闭合时间",
          left: "left",
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
      this.LineChart = this.$echarts.init(document.getElementById("taskClose"));
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = {};
      data["timeid"] = this.id;
      data["type"] = "history";
      let result = await requests.post("/tasktable/getClose", data);
      console.log(result);
      let arr1 = [];
      result.data.forEach((e) => {
        arr1.push(e.actionid);
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.time);
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
  height: 500px;
  margin-top: 10px;
  overflow: hidden;
}
</style>