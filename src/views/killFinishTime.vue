<template>
  <div>
    <!-- echarts -->
    <div id="killFinishTime" class="main_container"></div>
  </div>
</template>
        <script>
import requests from "../api/request";
export default {
  props: ["id", "id1", "id2"],
  data() {
    return {
      timeid: this.id,
      timeid1: this.id1,
      timeid2: this.id2,
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
          data: [1, 2, 3, 4, 5],
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
          {
            name: "",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  watch: {
    id1(o, n) {
      this.timeid1 = o;
      this.id1 = o;
    },
    id2(o, n) {
      this.timeid2 = o;
      this.id2 = o;
    },
    id(o, n) {
      this.timeid = o;
      this.id = o;
    },
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("killFinishTime")
    );
    setTimeout(() => {
      this.getChartsList();
    }, 1000);
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      if (
        this.timeid1 !== 0 &&
        this.timeid2 !== 0 &&
        typeof this.timeid1 !== "undefined" &&
        typeof this.timeid2 !== "undefined"
      ) {
        let data = {};
        data["timeid"] = this.timeid1;
        data["type"] = "history";
        let result = await requests.post("/tasktable/getClose", data);
        // console.log(result);
        let arr1 = [];
        result.data.forEach((e) => {
          arr1.push(e.closetime);
        });
        let arr2 = [];
        result.data.forEach((e) => {
          arr2.push(e.time);
        });
        // this.LineChartOption.xAxis.data = arr1;

        let data2 = {};
        data2["timeid"] = this.timeid2;
        data2["type"] = "history";
        let result2 = await requests.post("/tasktable/getClose", data2);
        let arr3 = [];
        result2.data.forEach((e) => {
          arr3.push(e.closetime);
        });
        let arr4 = [];
        result2.data.forEach((e) => {
          arr4.push(e.time);
        });
        // this.LineChartOption.xAxis.data = arr1;
        this.LineChartOption.series[0].data = arr1;
        this.LineChartOption.series[1].data = arr3;
      }

      if (
        this.id !== 0 &&
        typeof this.timeid1 === "undefined" &&
        typeof this.timeid2 === "undefined"
      ) {
        let data3 = {};
        data3["timeid"] = this.id;
        data3["type"] = "history";
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
        // this.LineChartOption.series[1].data = arr6;
      }

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