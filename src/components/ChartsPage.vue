<template>
  <el-card>
    <el-header>
      <div>
        {{ this.$route.query.time }}历史数据回放{{ this.$route.query.id }}
      </div>
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
        <div>
          <el-checkbox
            label="杀伤链数量"
            @change="checkboxGroup9"
            :checked="checked9"
          ></el-checkbox>
          <el-checkbox
            label="杀伤链成功率"
            @change="checkboxGroup11"
            :checked="checked11"
          ></el-checkbox>
          <el-checkbox
            label="杀伤网复杂度"
            @change="checkboxGroup12"
            :checked="checked12"
          ></el-checkbox>
          <el-checkbox
            label="杀伤链分配时间"
            @change="checkboxGroup15"
            :checked="checked15"
          ></el-checkbox>
          <el-checkbox
            label="杀伤链闭合效率"
            @change="checkboxGroup10"
            :checked="checked10"
          ></el-checkbox>
          <el-checkbox
            label="杀伤链闭合时间"
            @change="checkboxGroup13"
            :checked="checked13"
          ></el-checkbox>
        </div>
        <div>
          <el-checkbox
            label="杀伤链性价比"
            @change="checkboxGroup16"
            :checked="checked16"
          ></el-checkbox>
          <el-checkbox
            label="马赛克体系去中心化程度"
            @change="checkboxGroup8"
            :checked="checked8"
          ></el-checkbox>
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
            label="体系节点使用率"
            @change="checkboxGroup5"
            :checked="checked5"
          ></el-checkbox>
        </div>
        <div>
          <el-checkbox
            label="杀伤链异构型"
            @change="checkboxGroup14"
            :checked="checked14"
          ></el-checkbox>
          <el-checkbox
            label="异构装备数量"
            @change="checkboxGroup7"
            :checked="checked7"
          ></el-checkbox>

          <el-checkbox
            label="作战智能体数量变化"
            @change="checkboxGroup4"
            :checked="checked4"
          ></el-checkbox>

          <el-checkbox
            label="战损"
            @change="checkboxGroup6"
            :checked="checked6"
          ></el-checkbox>
        </div>
      </el-checkbox-group>
    </el-card>
    <div style="width: 1180px; margin-left: auto; margin-right: auto">
      <div>
        <KillNum
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked9 === true"
        />
      </div>
      <div>
        <runKillNum
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked11 === true"
        />
      </div>
      <div>
        <KillFallRate
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked12 === true"
        />
      </div>
      <div>
        <KillFindTime
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked15 === true"
        />
      </div>
      <div>
        <killRate
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked10 === true"
        />
      </div>

      <div>
        <KillFinishTime
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked13 === true"
        />
      </div>

      <div>
        <KillFindVal
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked16 === true"
        />
      </div>
      <div>
        <killRecombine
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked8 === true"
        />
      </div>
      <div>
        <TaskFinishRate
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked1 === true"
        />
      </div>
      <div>
        <TaskInterfereRate
          :time="$route.query.time"
          v-show="checked2 === true"
          :id="$route.query.id"
        />
      </div>
      <div>
        <TargetNum
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked3 === true"
        />
      </div>
      <div>
        <NodeUsage
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked5 === true"
        />
      </div>
      <div>
        <KillEquipment
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked14 === true"
        />
      </div>
      <div>
        <AgentNum
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked7 === true"
        />
      </div>
      <div>
        <NodeChargeNum
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked4 === true"
        />
      </div>

      <div>
        <BattleDamage
          :time="$route.query.time"
          :id="$route.query.id"
          v-show="checked6 === true"
        />
      </div>
    </div>
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
import killRecombine from "../views/killRecombine.vue";
import KillNum from "../views/killNum.vue";
import killRate from "../views/killRate.vue";
import runKillNum from "../views/runKillNum.vue";
import KillFallRate from "../views/killFallRate.vue";
import KillFinishTime from "../views/killFinishTime.vue";
import KillEquipment from "../views/killEquipment.vue";
import KillFindTime from "../views/killFindTime.vue";
import KillFindVal from "../views/killFindVal.vue";

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
      checked12: true,
      checked13: true,
      checked14: true,
      checked15: true,
      checked16: true,
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
    killRecombine,
    KillNum,
    killRate,
    runKillNum,
    KillFallRate,
    KillFinishTime,
    KillEquipment,
    KillFindTime,
    KillFindVal,
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
      this.checked9 = !this.checked9;
    },
    checkboxGroup10(row) {
      this.checked10 = !this.checked10;
    },
    checkboxGroup11(row) {
      this.checked11 = !this.checked11;
    },
    checkboxGroup12(row) {
      this.checked12 = !this.checked12;
    },
    checkboxGroup13(row) {
      this.checked13 = !this.checked13;
    },
    checkboxGroup14(row) {
      this.checked14 = !this.checked14;
    },
    checkboxGroup15(row) {
      this.checked15 = !this.checked15;
    },
    checkboxGroup16(row) {
      this.checked16 = !this.checked16;
    },
  },
};
</script>

<style>
</style>