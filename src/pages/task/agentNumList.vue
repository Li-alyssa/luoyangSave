<template>
  <div style="width: 100%; height: 100%">
    <div class="title">异构装备数量</div>
    <ul class="ninth">
      <li v-for="(item, index) in agentNumList" :key="index">
        <div class="num">
          <h1>{{ item.number }}</h1>
        </div>
        <div class="txt">
          <h2>{{ item.type }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import requests from "../../api/request";
export default {
  data() {
    return {
      agentNumList: [],
    };
  },
  methods: {
    async getAgentNumList() {
      let result = await requests.get("/agentnum/list");
      //   console.log(result.data);
      this.agentNumList = result.data;
      console.log(this.agentNumList);
    },
  },
  mounted() {
    this.getAgentNumList();
  },
};
</script>

<style scoped>
.title {
  color: #ccc;
  font-size: 20px;
  margin-bottom: 10px;
}
.ninth {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.ninth li {
  width: 31%;
  height: 30%;
  /* background-color: red; */
}

.ninth li:nth-child(3n + 3) {
  margin-bottom: 10px;
}

.num {
  color: gold;
  font-size: 20px;
}
</style>