<template>
  <el-card>
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        label="任务分配完成率"
        @change="checkboxGroup1"
        :checked="checked1"
      ></el-checkbox>
      <el-checkbox
        label="干扰成功率"
        :checked="checked2"
        @change="checkboxGroup2"
      ></el-checkbox>
      <el-checkbox
        label="发现目标树"
        @change="checkboxGroup3"
        :checked="checked3"
      ></el-checkbox>
      <el-checkbox
        label="作战智能体数量变化"
        @change="checkboxGroup4"
        :checked="checked4"
      ></el-checkbox>
      <el-checkbox
        label="体系节点使用率"
        @change="checkboxGroup5"
        :checked="checked5"
      ></el-checkbox>
      <el-checkbox
        label="作战装备参数"
        @change="checkboxGroup6"
        :checked="checked6"
      ></el-checkbox>
      <el-checkbox
        label="异构装备数量"
        @change="checkboxGroup7"
        :checked="checked7"
      ></el-checkbox>
      <el-checkbox
        label="战损"
        @change="checkboxGroup8"
        :checked="checked8"
      ></el-checkbox>
    </el-checkbox-group>

    <TaskFinishRate :time="$route.params.time" v-show="checked1 === true" />
    <TaskInterfereRate :time="$route.params.time" v-show="checked2 === true" />
    <TargetNum :time="$route.params.time" v-show="checked3 === true" />
    <NodeChargeNum :time="$route.params.time" v-show="checked4 === true" />
    <NodeUsage :time="$route.params.time" v-show="checked5 === true" />
    <BattleDamage :time="$route.params.time" v-show="checked6 === true" />
    <AgentNum :time="$route.params.time" v-show="checked7 === true" />
    <EquipmentParameters
      :time="$route.params.time"
      v-show="checked8 === true"
    />
  </el-card>
</template>

<script>
import TaskFinishRate from "../views/taskFinishRate.vue";
import TaskInterfereRate from "../views/taskInterfereRate.vue";
import TargetNum from "../views/targetNum.vue";
import NodeChargeNum from "../views/nodeChargeNum.vue";
import NodeUsage from "../views/nodeUsage.vue";
import AgentNum from "../views/agentNum.vue";
import BattleDamage from "../views/battleDamage.vue";
import EquipmentParameters from "../views/equipmentParameters.vue";

export default {
  data() {
    return {
      time: "",
      checkList: [],
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
    };
  },
  components: {
    TaskFinishRate,
    TaskInterfereRate,
    TargetNum,
    NodeChargeNum,
    NodeUsage,
    AgentNum,
    BattleDamage,
    EquipmentParameters,
  },
  methods: {
    checkboxGroup1(row) {
      this.checked1 = !this.checked1;
    },
    checkboxGroup2(row) {
      console.log(row);
      this.checked2 = !this.checked2;
    },
    checkboxGroup3(row) {
      this.checked3 = !this.checked3;
      console.log(row);
    },
    checkboxGroup4(row) {
      this.checked4 = !this.checked4;
      console.log(row);
    },
    checkboxGroup5(row) {
      this.checked5 = !this.checked5;
      console.log(row);
    },
    checkboxGroup6(row) {
      this.checked6 = !this.checked6;
      console.log(row);
    },
    checkboxGroup7(row) {
      this.checked7 = !this.checked7;
      console.log(row);
    },
    checkboxGroup8(row) {
      this.checked8 = !this.checked8;
      console.log(row);
    },
  },
};
</script>

<style>
</style>