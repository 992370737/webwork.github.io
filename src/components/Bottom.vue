<template>
  <div class="bottom-bar">
      <div class="first-flood">
          <dl>
              <dt><img src="../../static/img/底部/1.jpg" alt="正品保障"></dt>
              <dd>
                  <p><strong>正品保障</strong></p>
                  <p>正品保障、提供发票</p>
              </dd>
          </dl>
          <dl>
              <dt><img src="../../static/img/底部/2.jpg" alt="极速物流"></dt>
              <dd>
                  <p><strong>极速物流</strong></p>
                  <p>如约送货、送货入户</p>
              </dd>
          </dl>
          <dl>
              <dt><img src="../../static/img/底部/3.jpg" alt="售后无忧"></dt>
              <dd>
                  <p><strong>售后无忧</strong></p>
                  <p>30天包退、365天包换</p>
              </dd>
          </dl>
          <dl>
              <dt><img src="../../static/img/底部/4.jpg" alt="帮助中心"></dt>
              <dd>
                  <p><strong>帮助中心</strong></p>
                  <p>您的购物指南</p>
              </dd>
          </dl>
          <dl>
              <dt><img src="../../static/img/底部/5.png" alt="省心购" style="height:48px;"></dt>
              <dd>
                  <p><strong>省心购</strong></p>
                  <p>专注好服务</p>
              </dd>
          </dl>
      </div>
      <div class="second-flood">
          <dl>
              <dt>购物指南</dt>
              <dd>免费注册</dd>
              <dd>会员等级</dd>
              <dd>常见问题</dd>
          </dl>
          <dl>
              <dt>支付方式</dt>
              <dd>苏宁支付</dd>
              <dd>网银支付</dd>
              <dd>快捷支付</dd>
              <dd>分期付款</dd>
              <dd>货到付款</dd>
              <dd>任性付支付</dd>
          </dl>
          <dl>
              <dt>物流配送</dt>
              <dd>运费政策</dd>
              <dd>物流配送服务</dd>
              <dd>签收验货</dd>
              <dd>物流查询</dd>
          </dl>
          <dl>
              <dt>售后服务</dt>
              <dd>退换货政策</dd>
              <dd>贵就赔</dd>
              <dd>维修/安装</dd>
              <dd>订单修改</dd>
              <dd>退换货申请</dd>
              <dd>我的发票</dd>
          </dl>
          <dl>
              <dt>商家服务</dt>
              <dd>合作招商</dd>
              <dd>培训中心</dd>
              <dd>广告服务</dd>
              <dd>商家帮助</dd>
              <dd>服务市场</dd>
              <dd>规则中心</dd>
          </dl>
      </div>
      <div class="third-flood">
          <p>@author&nbsp;:&nbsp;Z09418207-黄诚江</p>
      </div>
  </div>
</template>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    font-size: 12px;
}
.bottom-bar {
    width: 100%;
    background: #f5f5f5;
    border-top: 1px solid #e7e7e7;
    min-width: 990px;
}
.first-flood {
    padding: 12px 0;
    height: 73px;
    border-bottom: 1px solid #eaeaea;
}
.first-flood,.second-flood {
    width: 1250px;
    margin: auto;
    margin-top: 10px;
}
.first-flood dl {
    float: left;
    width: 250px;
    overflow: hidden;
}
.first-flood dt {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 8px;
}
.first-flood dd {
    width: 180px;
    float: left;
    height: 48px;
}
.first-flood p {
    line-height: 24px;
    width: 100%;
    color: #545454;
}
.first-flood strong {
    font-size: 16px;
    width: 100%;
}
.second-flood {
    height: 200px;
}
.second-flood dl {
    float: left;
    height: 160px;
    width: 250px;
}
.second-flood dt {
    width: 100%;
    line-height: 40px;
    font-weight: 700;
    color: #545454;
    height: 35px;
    font-size: 14px;
    overflow: hidden;
}
.second-flood dd {
    width: 100%;
    line-height: 22px;
}
.second-flood dd:hover{
    color: #ff8000;
    cursor: pointer;
}
.third-flood {
    height: 140px;
    width: 100%;
    background: #545454;
    color: white;
    text-align: center;
    padding-top: 50px;
    border-top: 3px solid #ff8000;
}
.third-flood p {
    font-size: 200%;
}
</style>
