<template>
  <div class="page-detail">
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="授信审核信息" name="first">
          <div class="detail-one">
            <div class="detail-title">规则模型结论</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="4">
                  <div class="left">精确模型结论</div>
                </el-col>
                <el-col :span="4">
                  <div class="right colorSuccess">通过</div>
                </el-col>
                <el-col :span="4">
                  <div class="left">精确分</div>
                </el-col>
                <el-col :span="4">
                  <div class="right">20</div>
                </el-col>
                <el-col :span="4">
                  <div class="left">预授信额度</div>
                </el-col>
                <el-col :span="4">
                  <div class="right">2000，000.00</div>
                </el-col>
                <el-col :span="4">
                  <div class="left">风险等级</div>
                </el-col>
                <el-col :span="4">
                  <div class="right colorError">
                    高（
                    <span class="colorWran">中、</span>
                    <span class="colorSuccess">低</span> ）风险
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="left">民盛分</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left"></div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">规则引擎结论</div>
                </el-col>
                <el-col :span="20">
                  <div class="right">（通过/拒绝/人工审核）</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="detail-one">
            <div class="detail-title">命中规则</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="3">
                  <div class="left">命中规则描述</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">排疑结果</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">创建时间</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">匹配申请</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">命中规则描述</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">排疑结果</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">创建时间</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">匹配申请</div>
                </el-col>
                <el-col :span="3">
                  <div class="right"></div>
                </el-col>
                <el-col :span="3">
                  <div class="left">排疑情况备注</div>
                </el-col>
                <el-col :span="21">
                  <div class="right">（通过/拒绝/人工审核）</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="detail-two">
            <div class="detail-title">基本信息</div>
            <el-button size="mini" class="detail-button" type="primary">借款申请信息</el-button>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">借款金额</div>
              </el-col>
              <el-col :span="3">
                <div class="right">2000.00.00</div>
              </el-col>
              <el-col :span="3">
                <div class="left">期限</div>
              </el-col>
              <el-col :span="3">
                <div class="right">12</div>
              </el-col>
              <el-col :span="3">
                <div class="left">产品名称</div>
              </el-col>
              <el-col :span="3">
                <div class="right">联合放款</div>
              </el-col>
              <el-col :span="3">
                <div class="left">借款用途</div>
              </el-col>
              <el-col :span="3">
                <div class="right">无</div>
              </el-col>
            </el-row>
            <el-button size="mini" class="detail-button" type="primary">借款人信息</el-button>
            <div class="two-idcard">
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
              </div>
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
              </div>
            </div>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">姓名</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">身份证号</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">发证机关</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">身份证有效期</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">性别</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">年龄</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">户籍地省份</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">户籍地市</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">民族</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">手机号</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">户籍地区</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">婚姻状态</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">户籍地详细地址</div>
              </el-col>
              <el-col :span="9">
                <div class="right">广东省广州市越秀区长堤大马路244-246号</div>
              </el-col>

              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">居住地省份</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">居住地市</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">居住地区</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">居住地详细地址</div>
              </el-col>
              <el-col :span="9">
                <div class="right">广东省广州市越秀区长堤大马路244-246号</div>
              </el-col>
            </el-row>
            <div class="two-idcard">
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
                <el-row class="table-row table-two">
                  <el-col :span="12">
                    <div class="left">活体检测次数</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">1</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">申请活体检测分</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">90</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">活体检测结果</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right colorSuccess">通过</div>
                  </el-col>
                </el-row>
              </div>
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
                <el-row class="table-row table-two">
                  <el-col :span="12">
                    <div class="left">活体检测次数</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">1</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">申请活体检测分</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">90</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">活体检测结果</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right colorSuccess">通过</div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-button size="mini" class="detail-button" type="primary">联系人信息</el-button>
            <el-table
              class="two-el-table"
              :data="tableData"
              size="mini"
              stripe
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              style="width: 100%; height:100%;"
            >
              <el-table-column prop="reportName" label="紧急联系人姓名" align="center" width="200"></el-table-column>
              <el-table-column prop="reportMobile" label="紧急联系人手机号" align="center" width="200"></el-table-column>
              <el-table-column prop="reportType" label="联系人类型" align="center" width="200"></el-table-column>
            </el-table>
            <el-button size="mini" class="detail-button" type="primary">酒店信息</el-button>
            <div class="two-idcard">
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
              </div>
            </div>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">酒店id</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">星级</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">统一社会信用代码</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">营业执照注册时间</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">城市id</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">城市</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">景区id</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">景区名</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">集团id</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">集团</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">商业区id</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">商业区名</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">品牌</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">是否挂牌</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">携程用户评级(0---6)表示钻级</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">开业时间</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">最新装修时间</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">合作时间</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">距火车站距离</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">距飞机场距离</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">距市中心距离</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">酒店名</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">谷歌经度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">谷歌纬度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">经度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">纬度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">高德经度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">高德纬度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">点评人数</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">整体评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">位置评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">卫生评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">服务评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">设施评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">酒店房间数</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">结算账户是否公司账户</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">结算账户使用时长（月）</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">申请人所属类型</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">预测年成交额</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">预测入住率</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left" style="font-size:12px;">酒店是否可预订(T或者F)</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">近1年月收入趋势斜率</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">近1年月入住率趋势斜率</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">位置信息</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
            </el-row>
            <el-button size="mini" class="detail-button" type="primary">酒店流水数据</el-button>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">入住月份</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">成交总间夜量评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">成交金额评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">近7天成交总间夜量评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">近7天成交金额评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">入住率评分</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
            </el-row>
          </div>
          <div class="detail-one">
            <div class="detail-title">外部征信报告</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="4">
                  <div class="left">运营商</div>
                </el-col>
                <el-col :span="4">
                  <div class="right">查看</div>
                </el-col>
                <el-col :span="4">
                  <div class="left">人行征信</div>
                </el-col>
                <el-col :span="4">
                  <div class="right">查看</div>
                </el-col>
                <el-col :span="4">
                  <div class="left">其它征信</div>
                </el-col>
                <el-col :span="4">
                  <div class="right">查看</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="detail-one">
            <div class="detail-title">电核记录</div>
            <div class="one-table">
              <el-table
                :data="tableMobileData"
                border
                size="mini"
                stripe
                @cell-click="column(column)"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                style="width: 100%; height:100%;"
              >
                <el-table-column prop="reportName" label="联系人姓名" align="center"></el-table-column>
                <el-table-column prop="reportContact" label="与客户关系" align="center"></el-table-column>
                <el-table-column prop="reportNumber" label="呼叫号码" align="center"></el-table-column>
                <el-table-column prop="reportOrigin" label="电话来源" align="center"></el-table-column>
                <el-table-column prop="reportType" label="接通类型" align="center"></el-table-column>
                <el-table-column prop="reportResult" label="电核结果" align="center"></el-table-column>
                <el-table-column prop="reportTime" label="操作时间" align="center"></el-table-column>
                <el-table-column prop="reportOperate" label="操作人" align="center"></el-table-column>
                <el-table-column prop="reportRemark" label="备注" align="center"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="detail-one">
            <div class="detail-title">审批历史</div>
            <div class="one-table">
              <el-table
                :data="tableHistoryData"
                border
                size="mini"
                stripe
                @cell-click="column(column)"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                style="width: 100%; height:100%;"
              >
                <el-table-column prop="reportNode" label="节点" align="center"></el-table-column>
                <el-table-column prop="reportApproval" label="审批结果" align="center"></el-table-column>
                <el-table-column prop="reportRefused" label="拒绝原因" align="center"></el-table-column>
                <el-table-column prop="reportMoney" label="批核金额" align="center"></el-table-column>
                <el-table-column prop="reportDay" label="期限" align="center"></el-table-column>
                <el-table-column prop="reportRate" label="利率" align="center"></el-table-column>
                <el-table-column prop="reportOpinion" label="审核意见" align="center"></el-table-column>
                <el-table-column prop="reportTime" label="提交时间" align="center"></el-table-column>
                <el-table-column prop="reportOperate" label="操作人" align="center"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="detail-one">
            <div class="detail-title">审批历史</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="4">
                  <div class="left">审核结果</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">拒绝原因一</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">拒绝原因二</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
              </el-row>
              <div class="table-remark">备注:</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="放款审核信息" name="second">
          <div class="detail-one">
            <div class="detail-title">命中规则</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="4">
                  <div class="left">命中规则描述</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">排疑结果</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">创建时间</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">命中规则描述</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">排疑结果</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">创建时间</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">排疑情况备注</div>
                </el-col>
                <el-col :span="20">
                  <div class="right"></div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="detail-two">
            <div class="detail-title">客户基本信息</div>
            <div class="two-idcard">
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
              </div>
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
              </div>
            </div>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">姓名</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">身份证号</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">性别</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">年龄</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">身份证有效期</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">发证机关</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
            </el-row>
            <div class="two-idcard">
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
                <el-row class="table-row table-two">
                  <el-col :span="12">
                    <div class="left">活体检测次数</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">1</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">申请活体检测分</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">90</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">活体检测结果</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right colorSuccess">通过</div>
                  </el-col>
                </el-row>
              </div>
              <div class="idcard-item">
                <img src="../../assets/idcard.png" alt />
                <el-row class="table-row table-two">
                  <el-col :span="12">
                    <div class="left">活体检测次数</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">1</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">申请活体检测分</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right">90</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="left">活体检测结果</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right colorSuccess">通过</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="detail-two">
            <div class="detail-title">合同信息</div>
            <el-row class="table-row">
              <el-col :span="3">
                <div class="left">授信额度</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">提现金额</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">申请期限</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">提现申请时间</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>

              <el-col :span="3">
                <div class="left">利率</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">月还款金额</div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
              <el-col :span="3">
                <div class="left">借款合同</div>
              </el-col>
              <el-col :span="3">
                <div class="right">查看</div>
              </el-col>
              <el-col :span="3">
                <div class="left"></div>
              </el-col>
              <el-col :span="3">
                <div class="right"></div>
              </el-col>
            </el-row>
          </div>
          <div class="detail-one">
            <div class="detail-title">审核操作</div>
            <div class="one-table">
              <el-row class="table-row">
                <el-col :span="4">
                  <div class="left">审核结果</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">拒绝原因一</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
                <el-col :span="4">
                  <div class="left">拒绝原因二</div>
                </el-col>
                <el-col :span="4">
                  <div class="right"></div>
                </el-col>
              </el-row>
              <div class="table-remark">审核意见:</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          reportName: "王大华",
          reportMobile: "13551493961",
          reportType: "父母"
        },
        {
          reportName: "王帮永",
          reportMobile: "18681650516",
          reportType: "朋友"
        }
      ],
      tableHistoryData: [
        {
          reportNode: "",
          reportApproval: "",
          reportRefused: "",
          reportMoney: "",
          reportDay: "",
          reportRate: "2",
          reportOpinion: "",
          reportTime: "",
          reportOperate: ""
        },
        {
          reportNode: "",
          reportApproval: "",
          reportRefused: "",
          reportMoney: "",
          reportDay: "",
          reportRate: "2",
          reportOpinion: "",
          reportTime: "",
          reportOperate: ""
        },
        {
          reportNode: "",
          reportApproval: "",
          reportRefused: "",
          reportMoney: "",
          reportDay: "",
          reportRate: "2",
          reportOpinion: "",
          reportTime: "",
          reportOperate: ""
        }
      ],
      tableMobileData: [
        {
          reportName: "1",
          reportContact: "",
          reportNumber: "",
          reportOrigin: "",
          reportType: "",
          reportResult: "",
          reportTime: "",
          reportOperate: "",
          reportRemark: ""
        },
        {
          reportName: "1",
          reportContact: "",
          reportNumber: "",
          reportOrigin: "",
          reportType: "",
          reportResult: "",
          reportTime: "",
          reportOperate: "",
          reportRemark: ""
        },
        {
          reportName: "1",
          reportContact: "",
          reportNumber: "",
          reportOrigin: "",
          reportType: "",
          reportResult: "",
          reportTime: "",
          reportOperate: "",
          reportRemark: ""
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
/deep/ .el-table::before {
  background-color: transparent;
}
.page-detail {
  margin: 0 2%;
  margin-top: 80px;
  .detail-title {
    height: 40px;
    background: #409eff;
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
  .detail-button {
    margin-top: 30px;
  }
  .table-row {
    border: 1px solid #ccc;
    border-bottom: none;
    border-right: none;
    .el-col {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .left {
        padding: 0 10px;
        height: 39px;
        background: #e5e5e5;
        color: #666;
      }
      .right {
        padding: 0 10px;
      }
    }
  }
  .table-two {
    width: 300px;
    margin-left: 20px;
    margin-top: 20px;
  }
  .colorSuccess {
    color: green;
  }
  .detail-one {
    margin-top: 30px;
    .one-table {
      border: 1px solid #666;
      padding: 20px;
      border-radius: 0px 0px 5px 5px;
      .table-remark {
        margin-top: 30px;
        border: 1px solid #666;
        padding: 10px;
        height: 100px;
        border-radius: 5px;
      }
      .colorError {
        color: red;
      }
      .colorWran {
        color: rgb(194, 81, 41);
      }
    }
  }
  .detail-two {
    margin-top: 30px;
    margin-bottom: 60px;
    .two-idcard {
      display: flex;
      align-items: center;
      margin: 20px 0px;
      .idcard-item {
        flex: 1 50%;
        width: 50%;
        img {
          width: 300px;
          margin-left: 20px;
        }
      }
    }
    .two-el-table {
    }
  }
}
</style>