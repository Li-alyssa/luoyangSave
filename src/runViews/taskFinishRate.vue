<!-- // 页面文件中使用，如index.vue中 -->
<template>
  <!-- echarts -->
  <div>
    <!-- <h1>{{ subtime }} ,{{ subid }}</h1> -->
    <div id="taskFinishRate" class="main_container"></div>
  </div>
</template>
  <script>
import requests from "../api/request";
export default {
  name: "taskFinishRate",
  data() {
    return {
      arr1: [],
      arr2: [],
      week: [],
      LineChart: null,
      LineChartOption: {
        title: {
          text: "任务分配效率",
          padding: 5,
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          top: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
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
            type: "line",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(
      document.getElementById("taskFinishRate")
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
      let result = await requests.post("/tasktable/getAllocationrat", data3);
      // console.log(result);
      result.data.forEach((e) => {
        this.arr1.push(e.time);
      });
      if (this.arr1.length == 7) {
        var newArr = this.arr1.slice(0);
        newArr.splice(0, 1);
        this.arr1 = newArr;
        // console.log(newArr);
      }
      result.data.forEach((e) => {
        this.arr2.push(e.rate);
      });
      if (this.arr2.length == 7) {
        var newArr2 = this.arr2.slice(0);
        newArr2.splice(0, 1);
        this.arr2 = newArr2;
      }
      if (this.arr1.length < 7) {
        this.LineChartOption.xAxis.data = this.arr1;
        this.LineChartOption.series[0].data = this.arr2;
      }
      if (this.arr1.length == 7) {
        this.LineChartOption.xAxis.data = this.arr1;
        this.LineChartOption.series[0].data = this.arr2;
      }

      this.LineChart.setOption(this.LineChartOption);
    },
  },
};
</script>
  <style scoped>
.main_container {
  /* margin-left: 10px; */
  margin-top: 10px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  /* background-color: #111; */
}
</style>
  