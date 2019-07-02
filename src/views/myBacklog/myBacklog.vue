<template>
  <div class="page-aueryQuoda">
    <div class="bxywform">
      <el-card>
        <el-form label-width="100px" :model="searchform" ref="searchform">
          <el-row class="human-form">
            <el-col :span="8">
              <el-form-item label="客户姓名" prop="name">
                <el-input size="mini" v-model.trim="searchform.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="手机号" prop="mobile">
                <el-input size="mini" v-model.trim="searchform.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证号" prop="idCode">
                <el-input size="mini" v-model.trim="searchform.idCode"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="进件时间" prop="beginDate">
                <el-date-picker
                  size="mini"
                  v-model="searchform.beginDate"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  default-time="00:00:00"
                  placeholder="请选择开始时间"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="至" prop="endDate">
                <el-date-picker
                  size="mini"
                  v-model="searchform.endDate"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  default-time="23:59:59"
                  placeholder="请选择结束时间"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-button size="mini" type="primary" @click="submitForm()">搜索</el-button>
                <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
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
          <el-table-column prop="reportCode" label="案件号" align="center"></el-table-column>
          <el-table-column prop="reportName" label="姓名" align="center"></el-table-column>
          <el-table-column prop="reportAdMoney" label="预授信额度（元）" align="center"></el-table-column>
          <el-table-column prop="reportMoney" label="授信额度（元）" align="center"></el-table-column>
          <el-table-column prop="reportNodeMoney" label="提现金额(元）" align="center"></el-table-column>
          <el-table-column prop="reportDay" label="申请期限" align="center"></el-table-column>
          <el-table-column prop="reportTime" label="进件时间" align="center"></el-table-column>
          <el-table-column prop="reportNode" label="节点名称" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row.reportName,scope.row.reportDate,scope.row.reportType)"
                type="text"
                size="small"
              >审核</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="case-pagination">
          <el-pagination
            background
            style="text-align:center"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchform.pageIndex"
            :page-sizes="[1,2,3,4]"
            :page-size="searchform.pageSize"
            layout="total, sizes, prev, pager, next"
            :total="count"
          >
            <!--这是显示总共有多少数据-->
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      searchform: {
        name: "",
        mobile: "",
        idCode: "",
        beginDate: "",
        endDate: "",
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: [
        {
          reportCode: "MS002647",
          reportName: "lock",
          reportAdMoney: "3000.00",
          reportMoney: "3000.00",
          reportNodeMoney: "3000.00",
          reportDay: "6",
          reportTime: "2019.01.24  15:31:35",
          reportNode: "风控岗"
        }
      ]
    };
  },

  components: {},
  computed: {},

  beforeMount() {},

  mounted() {
    var data = {};
    this.load(data);
  },

  methods: {
    submitForm() {
      this.load(this.searchform);
    },
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      this.load(this.searchform);
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.load(this.searchform);
    },
    handleClick() {
      this.$router.push({
        path: "/details/detailBacklog"
      });
    },
    //初始化
    load(data) {
      // this.$axios({
      //   method: "post",
      //   url: this.$store.state.domain + "/manage/order/getAccountAuditList",
      //   data: data
      // }).then(
      //   response => {
      //     var res = response.data;
      //     if (res.code == 0) {
      //       this.tableData = res.detail.result.pageList;
      //       this.count = res.detail.result.count;
      //       this.searchform.pageIndex = res.detail.result.pageIndex;
      //       this.searchform.pageSize = res.detail.result.pageSize;
      //     }
      //   },
      //   error => {}
      // );
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.page-aueryQuoda {
  margin: 40px 5%;
  margin-top: 80px;
  .case-table {
    margin: 20px 0%;
    .case-pagination {
      margin-top: 30px;
    }
  }
}
</style>