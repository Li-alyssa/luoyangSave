<template>
  <div>
    <!-- echarts -->
    <div id="killEquipment" class="main_container"></div>
  </div>
</template>
    <script>
import requests from "../api/request";
export default {
  props: ["id", "time"],
  data() {
    return {
      subtime: this.time,
      LineChartOption: {
        title: {
          text: "杀伤链异构型",
        },
        legend: {
          // data: ["侦察飞机死亡数量"],
        },
        tooltip: {
          show: true, // 是否显示
        },
        xAxis: {
          type: "category",
          data: ["2022.09.27"],
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
            name: "杀伤链异构型",
            type: "bar",
            data: [42],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LineChart = this.$echarts.init(
        document.getElementById("killEquipment")
      );
      this.getChartsList();
    });
    // this.getBeforeDate();
  },
  methods: {
    async getChartsList() {
      let data = {};
      data["id"] = this.id;
      data["time"] = this.time;
      //   let result = await requests.post("/killchain/findEquipment", data);
      //   console.log(result.data);

      //   service.post("/back/statistic/flowStatistic").then((response) => {
      //     if (response.code != 0) {
      //     } else {
      // this.LineChartOption.legend.data = response.data.orgFlowRank;
      //   this.LineChartOption.series[0].data = result.data;
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