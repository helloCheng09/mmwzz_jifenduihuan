<template>
  <div class="centerlist" ref="centerlistelem">
    <div
      class="list-item"
      v-for="item in notuselist"
      :key="item.index"
      :data-id="item.coupon_id"
      @click="navtodetail(item.id)"
    >
      <img class="img-center" :src="item.pic">
      <span class="coupencent-num-text" v-if="item.num !=  1">{{item.num}} 张</span>
      <div class="right">
        <dd class="two-ellipsis">{{item.name}}</dd>
        <dt class="two-ellipsis">{{item.intro}}</dt>
        <div class="cou-price center-price">
          <!-- <span class="price-num">{{coupondet.coupon_price}}</span>
          <span class="price-dou">聪明豆</span>-->
        </div>
        <!-- <div class="exchange-btn">
            <span>聪明豆兑换</span>
        </div>-->
        <div class="daoqi-text">{{item.end_time}}到期</div>
      </div>
    </div>

    <!-- {{anotherGetter}} -->
    <div class="wall-alert load-alert" style="display:flex" v-if="loadingani">
      <div class="wall-alert-content wall-animation ani-spring" style>
        <div class="spinner spinnerThree">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="loading-over" v-if="isover">
      <span>———— 加载完了 ————</span>
    </div>
    <div class="loading-over" v-if="isnone">
      <span>———— 暂无优惠券 ————</span>
    </div>
  </div>
</template>

 <script>
let _self;
export default {
  data() {
    return {
      notuselist: [],
      page: 1,
      loadingani: false,
      isover: false,
      isnone: false,
      mytimer: "",
      student_id: "",
      coupon_type: 1, // 优惠券分类 1还未使用
    };
  },
  beforeMount() {
    _self = this;
    // 设置学生id
    this.student_id = this.$route.params.id;
  },
  mounted() {
    this.show();
    // 获取未使用券列表
    this.notuseLoad(); // 不足一屏加载 // 首屏加载
  },
  beforeDestroy () {
    window.removeEventListener("scroll", _self.notuseLoad)
  },
  methods: {
    show() {
       this.$refs.centerlistelem.addEventListener("scroll", _self.notuseLoad);
    },
    notuseLoad() {
      let scrollTop = this.$refs.centerlistelem.scrollTop;//滚动条的高
      var documentTop = _self.$refs.centerlistelem.offsetHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      if (scrollTop + screenHeight >= documentTop) {
        this.$refs.centerlistelem.removeEventListener("scroll", _self.notuseLoad); // 解除滚动监听事件
        this.loadingani = true;
        this.getlist({
          id: this.student_id,
          page: this.page
        });
        return false;
      }
    },
    getlist(option) {
      this.$http({
        methods: "GET",
        url:
          _self.$api().couponcenter +
          "?id=" +
          option.id +
          "&coupon_type="+
          _self.coupon_type +
          "&page=" +
          option.page // 未使用优惠券请求地址
      })
        .then(res => {
          if (res.data.code == 1 || res.data.code == 3) {
            // 获取成功
            let data = res.data.data;
            let total_page = data.total_page;
            let list = data.list;
            if (data.total_num == 0) {
              _self.$store.commit("settotalnum", {
                total_num: "暂无优惠券"
              });
            } else {
              _self.$store.commit("settotalnum", {
                total_num: data.total_num
              });
            }

            list.forEach(item => {
              _self.notuselist.push(item);
            });
            _self.loadingani = false; // 关闭加载动画
            if (_self.page >= total_page) {
              _self.isover = true;
              return false;
            } else {
              _self.page++; // 页码增加
              _self.show();
              // window.clearTimeout(_self.mytimer);
              // _self.mytimer = setTimeout(() => {
              //   var documentTop = _self.$refs.centerlistelem.offsetHeight; //全部内容的高
              //   var screenHeight = window.screen.availHeight; //当前屏幕的高
              //   if (documentTop < screenHeight) {
              //     _self.getlist({
              //       id: _self.student_id,
              //       page: _self.page
              //     }); // 不足一屏加载
              //     return false;
              //   }
              // }, 0);
            }
          } else {
            _self.loadingani = false; // 关闭加载动画
            _self.isnone = true;
            _self.$message({
              message: '数据请求失败~',
              center: true,
              duration: 1500,
              type: "error"
            });
            return false;
          }
        })
        .catch(err => {
          _self.$message({
            message: err,
            center: true,
            duration: 2000,
            customClass: "axios-wrong-msg el-message--error",
            iconClass: "el-icon-guide"
          });
        });
    },
    navtodetail(id) {
      this.$router.push({
        name: "couponcenterdet",
        params: {
          id: id,
          student_id: _self.student_id,
          coupon_type: _self.coupon_type
        }
      });
    }
  }
};
</script>

<style  lang='less' scope>
.list-item .img-center {
  height: 105px;
}
.list-item .right .center-price {
  margin-bottom: 0;
}
</style>
