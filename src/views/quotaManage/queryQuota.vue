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
          label: "授信状态",
          value: "status",
          col: 8,
          type: "select",
          placeholder: "请选择授信状态",
          options: [
            {
              value: "1",
              label: "审核中"
            },
            {
              value: "0",
              label: "待审核"
            }
          ]
        },
        {
          label: "审批时间",
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
          label: "预授信额度（元）",
          prop: "reportAdMoney"
        },
        {
          label: "授信额度（元）",
          prop: "reportMoney"
        },
        {
          label: "授信期限（期）",
          prop: "reportDay"
        },
        {
          label: "额度有效期限（天）",
          prop: "reportValidDay"
        },
        {
          label: "授信状态",
          prop: "reportStatus"
        },
        {
          label: "审批时间",
          prop: "reportTime"
        }
      ]
    };
  },

  components: {
    bxywForm,
    fkywTable
  },

  computed: {
    ...mapState("queryQuota", ["value", "count", "pageIndex", "pageSize"]),
    ...mapGetters("queryQuota", ["tableValue"])
  },

  beforeMount() {},

  mounted() {},

  methods: {
    ...mapActions("queryQuota", ["tableList"]),
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