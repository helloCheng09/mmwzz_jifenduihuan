<template>
  <div id="app">
    <div id="nav" v-if="navshow">
      <div class="nav-list">
        <router-link :to="'/couponlist2/'+ student_id" >兑换优惠券</router-link>
        <router-link :to="'/couponcenter/'+ student_id">我的优惠券</router-link>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
let _self;
import Apiurl from "@/api/Api.js";

export default {
  data() {
    return {
      student_id: ''
    };
  },
  computed: {
    navshow () {
      return this.$store.state.navshow
    }
  },
  beforeMount () {
     // 获取url学生id
    this.student_id = this.$route.params.id;
  },
  mounted() {
    
  },
};
</script>

<style lang="less">
#app {
  min-height: 100vh;
 
}
 .mypop-img  {
    top: 50%;
    transform: translateY(50%);
}
  .coupencent-num-text {
    position: absolute;
    padding: 5px;
    bottom: 10px;
    left: 10px;
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #009ffb;
    color: #fff;
  }
#nav {
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 997;
  .nav-list {
    margin: 10px 15px 0;
    height: 30px;
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #009ffb;
  }
  a {
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 28px;
    color: #009ffb;
  }
  .router-link-active {
    background-color: #009ffb;
    color: #fff;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  line-height: 1.2em;
  background-color: #f0f0f1;
  color: #333;
}

* {
  /* -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; */
  /* box-sizing: border-box; */
  font-size: 16px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: #333;
}

input {
  outline: none;
}

button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 单行省略 */
.one-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

/* 多行省略 */
.two-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.three-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* 伪元素 解决移动端1px线问题 */

.mob_1px,
.mob_1px_b,
.mob_1px_t,
.mob_1px_l,
.mob_1px_r {
  position: relative;
}

.mob_1px::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: 1px solid red;
  transform-origin: 0 0;
  transform: scale(0.5);
}

.mob_1px_r::after,
.mob_1px_l::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  color: red;
}

.mob_1px_r::after {
  right: -2px;
  border-right: 1px solid red;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}

.mob_1px_l::before {
  left: -1px;
  border-left: 1px solid red;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}

.mob_1px_b::after,
.mob_1px_t::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: red;
}

.mob_1px_t::before {
  top: -1px;
  border-top: 1px solid red;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.mob_1px_b::after {
  bottom: -2px;
  border-bottom: 1px solid red;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

/* 全局重置layui表单样式 */
.layui-flow-more {
  margin: 0;
  line-height: 2em;
  color: #808080;
  background-color: #fff;
}

.layui-flow-more a i {
  color: #009ffb;
}

.layui-input-block,
.layui-form-item {
  margin: 0;
}

.layui-form-label {
  padding: 0;
  text-align: left;
}

.layui-badge-rim,
.layui-colla-content,
.layui-colla-item,
.layui-collapse,
.layui-elem-field,
.layui-form-pane .layui-form-item[pane],
.layui-form-pane .layui-form-label,
.layui-input,
.layui-layedit,
.layui-layedit-tool,
.layui-quote-nm,
.layui-select,
.layui-tab-bar,
.layui-tab-card,
.layui-tab-title,
.layui-tab-title .layui-this:after,
.layui-textarea {
  resize: none;
  border: none;
  outline: none;
}

.closebtn-input,
.closebtn-textarea {
  position: absolute;
  z-index: 999;
  right: 14px;
  top: 50%;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  display: none;
}

.layui-btn {
  width: 100%;
  padding: 0 15px;
  height: 40px;
  font-size: 16px;
  border-radius: 20px;
  color: #fff;
  background-color: #009ffb;
}

.layui-form-danger + .layui-form-select .layui-input,
.layui-form-danger {
  color: #ff5722 !important;
}

.layui-form-danger::placeholder {
  color: #ff5722 !important;
}

/* // 清除按钮 */
.layui-form .layui-form-item .layui-form-block .clearbtn {
  width: 24px !important;
  height: 24px !important;
  display: none;
}

// 加载动画
.wall-alert .wall-alert-content {
  margin: 0 auto;
  font-size: 14px;
  color: #fff;
}
// 动画效果
.wall-animation {
  animation-duration: 400ms;
  animation-timing-function: forward;
}

// ### 1、弹簧式
.ani-spring {
  animation-name: ani-spring;
}

.spinner {
  border-radius: 50%;
  margin: 10px;
  display: inline-block;
  position: relative;
  height: 20px;
  width: 60px;
}
// 加载动画6
.spinnerThree span {
  height: 3px;
  width: 3px;
  border-radius: 50%;
  position: absolute;
  background: #009ffb;
}

.spinnerThree > span:nth-child(1) {
  top: 9px;
  left: 8px;
  animation: bounce 2s linear 0s infinite;
}

.spinnerThree > span:nth-child(2) {
  top: 9px;
  left: 14px;
  animation: bounce 2s linear 0.09s infinite;
}

.spinnerThree > span:nth-child(3) {
  top: 9px;
  left: 20px;
  animation: bounce 2s linear 0.18s infinite;
}

.spinnerThree > span:nth-child(4) {
  top: 9px;
  left: 26px;
  animation: bounce 2s linear 0.27s infinite;
}

.spinnerThree > span:nth-child(5) {
  top: 9px;
  left: 32px;
  animation: bounce 2s linear 0.36s infinite;
}

.spinnerThree > span:nth-child(6) {
  top: 9px;
  left: 38px;
  animation: bounce 2s linear 0.45s infinite;
}

.spinnerThree > span:nth-child(7) {
  top: 9px;
  left: 44px;
  animation: bounce 2s linear 0.54s infinite;
}

.spinnerThree > span:nth-child(8) {
  top: 9px;
  left: 50px;
  animation: bounce 2s linear 0.63s infinite;
}
@keyframes bounce {
  0%,
  10%,
  100% {
    top: 9px;
    transform: scale(1);
  }
  5% {
    top: 5px;
    transform: scale(2);
  }
}
// 加载完毕
.loading-over {
  text-align: center;
  > span {
    line-height: 2;
    font-size: 14px;
    color: #009ffb;
  }
}

.el-message {
  min-width: auto !important;
}
.axios-wrong-msg {
  .el-icon-guide {
    color: #f56c6c;
    margin-right: 10px;
  }
}
.el-message-box__wrapper {
  .my-msgbox-confirm {
    width: 80%;
  }
}
</style>
