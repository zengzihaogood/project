<template>
  <div class="page-detailContract">
    <el-card>
      <div class="detail-one">
        <div class="detail-title">合同基础</div>
        <el-row>
          <el-col :span="12">
            <span>客户姓名；</span>王邦友
          </el-col>
          <el-col :span="12">
            <span>手机注册号：</span>13888979433
          </el-col>
          <el-col :span="12">
            <span>案件号：</span>MS102352334
          </el-col>
          <el-col :span="12">
            <span>合同号：</span>MS102352334
          </el-col>
          <el-col :span="12">
            <span>签约时间：</span>2018-03-26 18:24
          </el-col>
          <el-col :span="12">
            <span>合同金额：</span>6000.00
          </el-col>
          <el-col :span="12">
            <span>计息方式：</span>等本等息
          </el-col>
          <el-col :span="12">
            <span>借款期限：</span>6个月
          </el-col>
          <el-col :span="12">
            <span>单期利率：</span>1.68%
          </el-col>
        </el-row>
      </div>
      <div class="detail-one">
        <div class="detail-title">还款概要</div>
        <el-row>
          <el-col :span="12">
            <span>已还期数；</span>1
          </el-col>
          <el-col :span="12">
            <span>剩余期数：</span>2
          </el-col>
          <el-col :span="12">
            <span>已还本金：</span>1000.00
          </el-col>
          <el-col :span="12">
            <span>剩余本金：</span>2000.00
          </el-col>
          <el-col :span="12">
            <span>已还利息：</span>90.00
          </el-col>
          <el-col :span="12">
            <span>剩余利息：</span>180.00
          </el-col>
        </el-row>
      </div>
      <div class="detail-one">
        <div class="detail-title">逾期概要</div>
        <el-row>
          <el-col :span="12">
            <span>总逾期期数；</span>0
          </el-col>
          <el-col :span="12">
            <span>当期状态：</span>正常/逾期
          </el-col>
          <el-col :span="12">
            <span>总逾期天数：</span>0
          </el-col>
          <el-col :span="12">
            <span>最大逾期天数：</span>0
          </el-col>
          <el-col :span="12">
            <span>累积罚息：</span>0.00
          </el-col>
          <el-col :span="12">
            <span>累计罚息：</span>0.00
          </el-col>
        </el-row>
      </div>
      <div class="detail-one">
        <div class="detail-title">还款计划</div>
        <div class="case-table">
          <el-card>
            <el-table
              :data="tableData"
              border
              size="mini"
              stripe
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              style="width: 100%; height:100%;"
            >
              <el-table-column align="center" type="index" label="序号"></el-table-column>
              <el-table-column prop="reportInDay" label="还款日" align="center"></el-table-column>
              <el-table-column prop="reportDay" label="逾期天数" align="center"></el-table-column>
              <el-table-column prop="reportMoney" label="本金" align="center"></el-table-column>
              <el-table-column prop="reportInterest" label="利息" align="center"></el-table-column>
              <el-table-column prop="reportBreach" label="违约金" align="center"></el-table-column>
              <el-table-column prop="reportPenalty" label="罚息" align="center"></el-table-column>
              <el-table-column prop="reportTotalMoney" label="合计" align="center"></el-table-column>
              <el-table-column prop="reportAlreMoney" label="实还" align="center"></el-table-column>
              <el-table-column label="结清" align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.reportAlreMoney == scope.row.reportTotalMoney">
                    <i class="el-icon-check"></i>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          reportInDay: "2018-04-24",
          reportDay: 0,
          reportMoney: 1000.0,
          reportInterest: 90.0,
          reportBreach: 0.0,
          reportPenalty: 0.0,
          reportTotalMoney: 1090.0,
          reportAlreMoney: 1090.0
        },
        {
          reportInDay: "2018-04-24",
          reportDay: 0,
          reportMoney: 1000.0,
          reportInterest: 90.0,
          reportBreach: 0.0,
          reportPenalty: 0.0,
          reportTotalMoney: 990.0,
          reportAlreMoney: 1090.0
        },
        {
          reportInDay: "2018-04-24",
          reportDay: 0,
          reportMoney: 1000.0,
          reportInterest: 90.0,
          reportBreach: 0.0,
          reportPenalty: 0.0,
          reportTotalMoney: 990.0,
          reportAlreMoney: 990.0
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
.page-detailContract {
  margin: 0 2%;
  margin-top: 80px;
  .detail-one {
    width: 100%;
    font-size: 14px;
    padding: 20px 0;
    .detail-title {
      background: #f9f9f9;
      height: 40px;
      line-height: 40px;
      text-indent: 20px;
      position: relative;
      &::before {
        position: absolute;
        width: 0;
        height: 40%;
        top: 25%;
        left: 10px;
        content: "";
        border: 2px solid green;
      }
    }
    .el-col {
      height: 40px;
      line-height: 40px;
      color: #333;

      span {
        display: inline-block;
        width: 110px;
        text-align: right;
        color: #999;
      }
    }
  }
}
</style>