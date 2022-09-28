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
      week: [],
      LineChart: null,
      LineChartOption: {
        title: {
          text: "任务分配完成统计",
          padding: 5,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["任务分配完成率"],
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
            name: "任务分配完成率",
            type: "line",
            stack: "Total",
            data: [1, 2, 34, 42, 12],
            smooth: true,
            itemStyle: {
              color: "#909399",
              borderColor: "#13EFB7",
              borderWidth: 2,
            },
          },
        ],
      },
    };
  },
  // created() {
  //   // 默认显示当天前一周的数据
  //   let data = [];
  //   this.start = this.getDay(+7);
  //   this.end = this.getDay();
  //   for (let i = 6; i >= 0; i--) {
  //     data.push(this.getDay(-i));
  //   }
  //   var date = data.reverse(); //得出一周的日期进行排序
  //   this.week = date.reverse();
  //   this.LineChartOption.xAxis.data = this.week;
  // },
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
      // console.log(this.time);

      // let result = await requests.get("/allocationrat/current/get");
      // // console.log(result.data);
      // let arr = [];
      // result.data.forEach((e) => {
      //   arr.push(e.time);
      // });
      // let arr2 = [];
      // result.data.forEach((e) => {
      //   arr2.push(e.completionrat);
      // });
      // this.LineChartOption.xAxis.data = arr;

      // //   service.post("/back/statistic/flowStatistic").then((response) => {
      // //     if (response.code != 0) {
      // //     } else {
      // // this.LineChartOption.legend.data = response.data.orgFlowRank;
      // this.LineChartOption.series[0].data = arr2;
      // this.LineChartOption.series[0].data = result.data;
      this.LineChart.setOption(this.LineChartOption);
      // console.log(response.data.orgFlowRank);
      // }
      //   }
      //   );
    },
    // getDay(day) {
    //   var today = new Date();
    //   var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    //   today.setTime(targetday_milliseconds); //注意，这行是关键代码
    //   var tYear = today.getFullYear();
    //   var tMonth = today.getMonth();
    //   var tDate = today.getDate();
    //   tMonth = this.doHandleMonth(tMonth + 1);
    //   tDate = this.doHandleMonth(tDate);
    //   return tYear + "/" + tMonth + "/" + tDate;
    // },
    // doHandleMonth(month) {
    //   var m = month;
    //   if (month.toString().length == 1) {
    //     m = month;
    //   }
    //   return m;
    // },
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
  