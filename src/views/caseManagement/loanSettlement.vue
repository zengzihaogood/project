<template>
  <div class="page-aueryQuoda">
    <bxyw-form :data="formData" :value="value" @outSearch="search"></bxyw-form>
    <fkyw-table
      :data="tableData"
      :value="tableValue"
      :count="count"
      :pageIndex="pageIndex"
      :pageSize="pageSize"
      @outSearchpageSize="SearchpageSize"
      @outSearchPageIndex="SearchPageIndex"
    ></fkyw-table>
  </div>
</template>

<script>
import bxywForm from "@/components/bxywForm.vue";
import fkywTable from "@/components/fkywTable.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      formData: [
        {
          label: "客户姓名",
          value: "name",
          col: 8,
          type: "text"
        },
        {
          label: "手机号",
          value: "mobile",
          col: 8,
          type: "text"
        },
        {
          label: "身份证号",
          value: "idCode",
          col: 8,
          type: "text"
        },
        {
          label: "提现申请时间",
          value: "startTime",
          col: 8,
          type: "datetime",
          format: "yyyy-MM-dd HH:mm:ss",
          default: "00:00:00",
          placeholder: "请选择开始时间"
        },
        {
          label: "至",
          value: "endTime",
          col: 8,
          type: "datetime",
          format: "yyyy-MM-dd HH:mm:ss",
          default: "23:59:59",
          placeholder: "请选择结束时间"
        },
        {
          col: 8,
          type: "button"
        }
      ],
  
      tableData: [
        {
          label: "案件号",
          prop: "reportCode"
        },
        {
          label: "姓名",
          prop: "reportName",
          url: "true"
        },
        {
          label: "提现金额（元）",
          prop: "reportMoney"
        },
        {
          label: "借款期限（期）",
          prop: "reportDay"
        },
        {
          label: "提现申请时间",
          prop: "reportTime"
        },
        {
          label: "操作",
          options: "审核"
        }
      ],
      
    };
  },

  components: {
    bxywForm,
    fkywTable
  },

   computed: {
    ...mapState("loanSettlement", ["value", "count", "pageIndex", "pageSize"]),
    ...mapGetters("loanSettlement", ["tableValue"])
  },

  beforeMount() {},

  mounted() {},

  methods: {
    ...mapActions("loanSettlement", ["tableList"]),
    // 改变每页显示的条数
    SearchpageSize(val) {
      var searchData = {};
      searchData = this.value;
      searchData.pageSize = val.pageSize;
      searchData.pageIndex = val.pageIndex;
      this.tableList(searchData);
    },
    // 初始页currentPage
    SearchPageIndex(val) {
      var searchData = {};
      searchData = this.value;
      searchData.pageSize = val.pageSize;
      this.tableList(searchData);
    },
    //搜索
    search(event) {
      Object.assign(this.value, event);
      this.tableList();
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.page-aueryQuoda {
  width: 100%;
}
</style>