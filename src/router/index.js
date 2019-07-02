import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 登陆页面
      path: '/login',
      name: '登录页面',
      component: require('../views/login/login.vue').default
    },
    {
      // 主页
      path: '/home',
      component: require('../views/index/index.vue').default,
      name: '主页',
      meta: {
        auth: true
      },
      children: [
        {
          // 主题home
          path: '/mshome',
          name: '主题主页',
          component: require('../views/index/home.vue').default,
          meta: {
            requireAuth: true
          }
        },
        {
          // 修改密码
          path: '/changePassword',
          name: '修改密码',
          component: require('../views/changePassword/changePassword.vue').default,
        },
        // {
        //   // 额度管理->额度期限查询
        //   path: '/quotaManage/queryQuota',
        //   name: '额度期限查询',
        //   component: require('../views/quotaManage/queryQuota.vue').default,
        // },
        // {
        //   // 额度管理->人工审核
        //   path: '/quotaManage/humanReview',
        //   name: '人工审核',
        //   component: require('../views/quotaManage/humanReview.vue').default,
        // },
        // {
        //   // 案件管理->放款审结
        //   path: '/caseManagement/loanSettlement',
        //   name: '放款审结',
        //   component: require('../views/caseManagement/loanSettlement.vue').default,
        // },
        {
          // 案件管理->案件清单
          path: '/caseManagement/caseListing',
          name: '案件清单',
          component: require('../views/caseManagement/caseListing.vue').default,
        },
        {
          // 合同管理->合同列表
          path: '/contractInformation/contractList',
          name: '合同列表',
          component: require('../views/contractInformation/contractList.vue').default,
        },
        {
          // 合同管理->结清合约
          path: '/contractInformation/warehouseContract',
          name: '结清合约',
          component: require('../views/contractInformation/warehouseContract.vue').default,
        },
        {
          // 合同管理->在库合约
          path: '/contractInformation/settleContract',
          name: '在库合约',
          component: require('../views/contractInformation/settleContract.vue').default,
        },
        {
          // 支付管理->放款记录
          path: '/paymentManage/recordLending',
          name: '放款记录',
          component: require('../views/paymentManage/recordLending.vue').default,
        },
        {
          // 支付管理->还款记录
          path: '/paymentManage/repaymentRecord',
          name: '还款记录',
          component: require('../views/paymentManage/repaymentRecord.vue').default,
        },
        {
          // 我的待办->我的待办
          path: '/myBacklog/myBacklog',
          name: '我的待办',
          component: require('../views/myBacklog/myBacklog.vue').default,
        },
        {
          // 详情页->公共详情页
          path: '/details/detail',
          name: '公共详情页',
          component: require('../views/details/detail.vue').default,
        },
        {
          // 详情页->合同详情页
          path: '/details/detailContract',
          name: '合同详情页',
          component: require('../views/details/detailContract.vue').default,
        },
        {
          // 详情页->审核详情页
          path: '/details/detailBacklog',
          name: '审核详情页',
          component: require('../views/details/detailBacklog.vue').default,
        },
      ]
    }
  ]
})
