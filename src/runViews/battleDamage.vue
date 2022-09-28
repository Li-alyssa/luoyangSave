<!-- // 页面文件中使用，如index.vue中 -->
<template>
  <!-- echarts -->
  <div id="battleDamage" class="main_container"></div>
</template>
      <script>
import requests from "../api/request";
export default {
  name: "battleDamage",
  data() {
    return {
      week: [],
      LineChart: null,
      LineChartOption: {
        title: {
          text: "战损统计",
          padding: 5,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["战损"],
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
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "战损",
            type: "line",
            stack: "Total",
            data: [],
            smooth: true,
            areaStyle: {
              //填充的颜色
              color: {
                //线性渐变前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6a7985", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#6a7985", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            itemStyle: {
              color: "#6a7985",
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
      document.getElementById("battleDamage")
    );
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let result = await requests.get("/battledamage/current/get");
      console.log(result.data);
      let arr = [];
      result.data.forEach((e) => {
        arr.push(e.time.slice(0, 10));
      });
      let arr2 = [];
      result.data.forEach((e) => {
        arr2.push(e.lossNum);
      });
      this.LineChartOption.xAxis.data = arr;

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      this.LineChartOption.series[0].data = arr2;
      // this.LineChartOption.series[0].data = arr2;
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
      