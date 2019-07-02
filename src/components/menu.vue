<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row v-if="this.$store.state.isLeftHiden" style="padding-top:50px;"></el-row>
    <el-row type="flex" justify="center" align="center" v-if="!this.$store.state.isLeftHiden">
      <el-col type="flex" justify="center" align="center" style="padding-top:10px;">
        <el-button style="background:#ccc; color:#6f6711;">民盛小贷业务系统</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color=" #6f6711"
          text-color="#fff"
          active-text-color="#EEDC82"
          unique-opened
          :collapse="this.$store.state.isLeftHiden"
        >
          <el-submenu index="1">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shujuku"></use>
              </svg>
              <span>案件管理</span>
            </template>
            <el-menu-item-group>
              <!-- <router-link to="/caseManagement/loanSettlement">
                <el-menu-item index="2-1">放款审结</el-menu-item>
              </router-link> -->
              <router-link to="/caseManagement/caseListing">
                <el-menu-item index="1-1">案件清单</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-guanliyuan1"></use>
              </svg>
              <span>我的待办</span>
            </template>
            <el-menu-item-group>
              <router-link to="/myBacklog/myBacklog">
                <el-menu-item index="2-1">我的待办</el-menu-item>
              </router-link>
              <!-- <router-link to="/quotaManage/humanReview">
                <el-menu-item index="1-2">人工审核</el-menu-item>
              </router-link> -->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiangmu"></use>
              </svg>
              <span>合同管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/contractInformation/contractList">
                <el-menu-item index="3-1">合同列表</el-menu-item>
              </router-link>
              <router-link to="/contractInformation/warehouseContract">
                <el-menu-item index="3-2">在库合约</el-menu-item>
              </router-link>
              <router-link to="/contractInformation/settleContract">
                <el-menu-item index="3-3">结清合约</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qian"></use>
              </svg>
              <span>支付管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/paymentManage/recordLending">
                <el-menu-item index="4-1">放款记录</el-menu-item>
              </router-link>
              <router-link to="/paymentManage/repaymentRecord">
                <el-menu-item index="4-2">还款记录</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped  lang="less">
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  // margin: -0.9px !important;
  border-color: rgb(211, 212, 212);
  background-color: #6f6711;
  border-right: none;
  /* background: #108dc6; */
  /deep/ .el-submenu__title i {
    color: #fff;
  }
  /deep/ .el-submenu .el-menu-item {
    min-width: 4%;
  }
}
/deep/ .el-menu--collapse {
  width: 4% !important;
}
/* 菜单 */
.side {
  // position: fixed;

  // width: 199px;
  height: 100%;
  transition: all 0.5s;
  /* background-color: rgb(211, 212, 212); */
  background: #6f6711;
  // border: 1px solid rgb(211, 212, 212);
}

.side-menu {
  width: 100%;
  transition: all 0.5s;
  /* background-color: rgb(211, 212, 212); */
  background: #6f6711;
}

.el-menu-item-group {
  text-align: center;
}
svg {
  width: 32px;
  height: 32px;
  padding: 1px 6px;
}
</style>