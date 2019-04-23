<template>
  <div id="couponcenterwrap">
    <div class="center-top">
      <div class="center-item">
        <span class="num">11</span>
        <span class="danwei">张</span>
      </div>
      <router-link class="nav-to-list" :to="{
        name: 'couponlist'
      }">优惠券列表</router-link>
    </div>
    <div class="main-show">
      <div class="list-bx mob_1px_b">
        <router-link class="link-item" to="/couponcenter">未使用</router-link>
        <router-link class="link-item" to="/couponcenter/used">已使用</router-link>
        <router-link class="link-item" to="/couponcenter/past">已过期</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scope>
#couponcenterwrap {
  .center-top {
    height: 130px;
    padding-top: 50px;
    text-align: center;
    background-color: #009ffb;
    .center-item {
      .num {
        font-size: 30px;
        color: #fff;
      }
      .danwei {
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
      padding: 20px 10px;
      justify-content: space-between;
    }

    .link-item {
    }
    .list-bx::after {
      border-color: #ddd;
    }
  }
  .router-link-exact-active {
    color: #009ffb;
  }
}
</style>
