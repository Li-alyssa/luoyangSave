<template>
  <div>
    <!-- echarts -->
    <div id="killFindVal" class="main_container"></div>
  </div>
</template>
    <script>
import requests from "../api/request";
export default {
  data() {
    return {
      arr1: [],
      arr2: [],
      LineChartOption: {
        title: {
          text: "杀伤链性价比",
        },
        legend: {
          // data: ["侦察飞机死亡数量"],
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
            name: "",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.LineChart = this.$echarts.init(document.getElementById("killFindVal"));
    setInterval(() => {
      this.getChartsList();
    }, 1000);

    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data3 = {};
      data3["type"] = "live";
      let result = await requests.post("/killchaintable/getCost", data3);
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
        this.arr2.push(e.val);
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
  width: 100%;
  height: 500px;
  margin-top: 10px;
  overflow: hidden;
}
</style>