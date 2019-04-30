<template>
  <div id="couponcenterwrap">
    <div class="center-top">
      <div class="center-item">
        <!-- <span class="none-coupon danwei" v-if="false">暂无优惠券</span> -->
        <span :class="totalnum == '暂无优惠券' ?'mini-size num': 'num'">{{totalnum}}</span>
        <span class="danwei" :class="totalnum == '暂无优惠券' ?'hidden': ''">{{danwei}}</span>
      </div>
      <router-link class="nav-to-list" :to="{
        name: 'couponlist'
      }">兑换新优惠券</router-link>
    </div>
    <div class="main-show">
      <div class="list-bx mob_1px_b">
        <router-link class="link-item" :to="'/couponcenter/'+ student_id">未使用</router-link>
        <router-link class="link-item" :to="'/couponcenter/'+ student_id +'/used'">已使用</router-link>
        <router-link class="link-item" :to="'/couponcenter/'+ student_id+'/past'">已过期</router-link>
      </div>
      <keep-alive>
        <div class="center-list-show">
           <router-view/>
        </div>
      </keep-alive>
    </div>
  </div>
</template>

<script>
let _self;
export default {
  data() {
    return {
      // nocoupon: false,
      student_id: "",
    };
  },
  beforeMount() {
  },
  mounted () {
    // 获取url学生id
    this.student_id = this.$route.params.id;
    this.$store.commit('creatnav') // 生成导航栏
    _self = this;
  },
  computed: {
    // 获取store优惠券总数
    totalnum() {
      return this.$store.getters.getTotalnum;
    },
    danwei () {
      if (this.totalnum != "暂无优惠券" && this.totalnum != "") {
         return '张'
      } else {
        return ''
      }
    },
    // 判断优惠券是否为0
    nocoupon() {
      // return !this.$store.state.total_num ? true : false
    }
  },
  methods: {}
};
</script>

<style lang="less" scope>

#couponcenterwrap {
  margin-top: 50px;
  .center-list-show {
   .centerlist{
          height: calc(~"100vh - 213px");
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;  
    }
  }
  .list-item {
    position: relative;
  }

  .center-top {
    padding: 20px 0;
    text-align: center;
    background-color: #009ffb;
    .center-item {
       height: 32px;
      .num {
        display: inline-block;
        vertical-align: text-bottom;
        font-size: 32px;
        color: #fff;
      }
      .danwei,
      .mini-size {
        display: inline-block;
        vertical-align: text-bottom;
        margin-left: 4px;
        margin-bottom: 3px;
        font-size: 20px;
        color: #fff;
      }
    }
    .nav-to-list {
      display: inline-block;
      margin-top: 10px;
      padding: 0 6px;
      line-height: 1.6;
      border-radius: 4px;
      background-color: #fff;
      color: #009ffb;
    }
  }

  .main-show {
    background-color: #fff;
    .list-bx {
      display: flex;
      padding: 20px 15px;
      justify-content: space-between;
    }

    .list-bx::after {
      bottom: -1px!important;
      border-color: #ddd;
    }
  }
  .router-link-exact-active {
    color: #009ffb;
  }
  .hidden {
    display: none !important;
  }
}
</style>
