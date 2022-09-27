<template>
  <el-card>
    <el-header>
      <div>实时数据</div>
    </el-header>
    <el-card
      style="
        width: 1180px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 50px;
      "
    >
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
          label="发现目标数量"
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
        <el-checkbox
          label="杀伤链累计数量"
          @change="checkboxGroup9"
          :checked="checked9"
        ></el-checkbox>
        <el-checkbox
          label="杀伤链效率"
          @change="checkboxGroup10"
          :checked="checked10"
        ></el-checkbox>
        <el-checkbox
          label="杀伤链成功率"
          @change="checkboxGroup11"
          :checked="checked11"
        ></el-checkbox>
      </el-checkbox-group>
    </el-card>
    <div style="width: 1180px; margin-left: auto; margin-right: auto">
      <div>
        <TaskFinishRate v-show="checked1 === true" />
      </div>
      <div>
        <TaskInterfereRate v-show="checked2 === true" />
      </div>
      <div>
        <TargetNum v-show="checked3 === true" />
      </div>
      <div>
        <NodeChargeNum v-show="checked4 === true" />
      </div>
      <div>
        <NodeUsage v-show="checked5 === true" />
      </div>
      <div>
        <BattleDamage v-show="checked6 === true" />
      </div>
      <div>
        <AgentNum v-show="checked7 === true" />
      </div>
      <div>
        <EquipmentParameters v-show="checked8 === true" />
      </div>
      <div>
        <KillNum v-show="checked9 === true" />
      </div>
      <div>
        <KillRate v-show="checked10 === true" />
      </div>
      <div>
        <KillSuccessfulNum v-show="checked11 === true" />
      </div>
    </div>
  </el-card>
</template>

<script>
import TaskFinishRate from "../runViews/taskFinishRate.vue";
import TaskInterfereRate from "../runViews/taskInterfereRate.vue";
import TargetNum from "../runViews/targetNum.vue";
import NodeChargeNum from "../runViews/nodeChargeNum.vue";
import NodeUsage from "../runViews/nodeUsage.vue";
import AgentNum from "../runViews/agentNum.vue";
import BattleDamage from "../runViews/battleDamage.vue";
import EquipmentParameters from "../runViews/equipmentParameters.vue";
import KillNum from "../runViews/killNum.vue";
import KillRate from "../runViews/killRate.vue";
import KillSuccessfulNum from "../runViews/killSuccessfulNum.vue";
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
      checked9: true,
      checked10: true,
      checked11: true,
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
    KillNum,
    KillRate,
    KillSuccessfulNum,
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
    checkboxGroup9(row) {
      this.checked1 = !this.checked1;
    },
    checkboxGroup10(row) {
      this.checked1 = !this.checked1;
    },
    checkboxGroup11(row) {
      this.checked1 = !this.checked1;
    },
  },
};
</script>
    
    <style>
</style>