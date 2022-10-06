<template>
  <div>
    <el-header>
      <div>{{ this.$route.query.time }}历史数据回放</div>
    </el-header>
    <el-main>
      <div class="l1">
        <TaskAllocationRat :id="$route.query.id" />
      </div>
      <div class="l2"><TaskClose :id="$route.query.id" /></div>
      <div class="c1"><AgentNumList /></div>
      <div class="c2"></div>
      <div class="r1"><TaskCloseEff :id="$route.query.id" /></div>
      <div class="r2"><TaskSuccess :id="$route.query.id" /></div>
    </el-main>
    <el-footer></el-footer>
  </div>
</template>

<script>
import TaskAllocationRat from "./task/taskAllocationRat.vue";
import TaskClose from "./task/taskClose.vue";
import TaskCloseEff from "./task/taskCloseEff.vue";
import TaskSuccess from "./task/taskSuccess.vue";
import AgentNumList from "./task/agentNumList.vue";
export default {
  components: {
    TaskAllocationRat,
    TaskClose,
    TaskCloseEff,
    TaskSuccess,
    AgentNumList,
  },
};
</script>

<style scoped>
.el-main {
  background: url(../assets/bg.jpg);
  background-size: cover;
}

.l1 {
  position: absolute;
  width: 30%;
  height: 50%;
  top: 60px;
  left: 0%;
  /* background-color: #fff; */
}
.l2 {
  position: absolute;
  width: 30%;
  height: 45%;
  top: 55%;
  left: 0%;
  /* background: #333; */
}

.c1 {
  position: absolute;
  width: 40%;
  height: 30%;
  top: 60px;
  left: 30%;
  color: white;
  /* background: #777777; */
}
.c2 {
  position: absolute;
  width: 40%;
  height: 65%;
  top: 35%;
  left: 30%;
  /* background: #888888; */
}

.r1 {
  position: absolute;
  width: 30%;
  height: 50%;
  top: 60px;
  right: 0%;
  /* background: #666666; */
}

.r2 {
  position: absolute;
  width: 30%;
  height: 45%;
  top: 55%;
  right: 0%;
  /* background: #777; */
}
</style>