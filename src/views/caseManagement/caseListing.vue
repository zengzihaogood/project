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
              <el-form-item label="案件状态" prop="status">
                <el-select size="mini" v-model="searchform.status" placeholder="请选择案件状态">
                  <el-option v-for="d in options" :key="d.value" :label="d.label" :value="d.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="审批时间" prop="beginDate">
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
          <el-table-column prop="reportName" label="姓名" align="center">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="godetail(scope.row.reportCode)"
              >{{scope.row.reportName}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="reportAdMoney" label="预授信额度（元）" align="center"></el-table-column>
          <el-table-column prop="reportMoney" label="授信额度（元）" align="center"></el-table-column>
          <el-table-column prop="reportDay" label="申请期限" align="center"></el-table-column>
          <el-table-column prop="reportavDay" label="额度有效期限（天）" align="center"></el-table-column>
          <el-table-column prop="reportNode" label="当前节点" align="center"></el-table-column>
          <el-table-column prop="reportStatus" label="案件状态" align="center"></el-table-column>
          <el-table-column prop="reportTime" label="审批时间" align="center"></el-table-column>
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
        count:0,
      searchform: {
        name: "",
        mobile: "",
        idCode: "",
        status: "",
        beginDate: "",
        endDate: "",
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      options: [
        {
          label: "测试状态一",
          value: 1
        },
        {
          label: "测试状态二",
          value: 2
        }
      ],
      tableData: [
        {
          reportCode: "MS002847",
          reportName: "lock",
          reportAdMoney: "3000.00",
          reportMoney: "3000.00",
          reportNowMoney: "3000.00",
          reportDay: "8",
          reportavDay: "30",
          reportNode: "",
          reportStatus: "",
          reportTime: "2019.01.24  15:31:35"
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
    godetail() {
      this.$router.push({
        path:'/details/detail'
      })
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