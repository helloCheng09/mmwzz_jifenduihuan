<template>
  <div id="coupondetwrap">
    <div class="det-top">
      <div
        class="list-item"
        data-id="item.coupon_id"
      >
        <img class="img-det" :src="coupondet.pic">
        <span class="coupencent-num-text" v-if="coupondet.num !=  1">{{coupondet.num}} 张</span>
        <div class="right det-card">
          <dd class="two-ellipsis">{{coupondet.name}}</dd>
          <!-- <dt class="two-ellipsis">{{coupondet.coupon_detail}}</dt> -->
          <!-- <div class="cou-price">
            <span class="price-num">{{coupondet.price}}</span>
            <span class="price-dou">聪明豆</span>
          </div> -->
          <!-- <div class="exchange-btn">
            <span>聪明豆兑换</span>
          </div>-->
        </div>
      </div>
    </div>
    <div class="mid-main">
      <!-- <div class="exchang-btn">
        <div class="left-bx">
          <img src="../assets/img/sc_cmd@2x.png">
          <span>聪明豆：{{coupondet.price}}</span>
        </div>
        <div class="right-btn" @click="exchangecoupon">立即兑换</div>
      </div> -->
      <!-- <div class="surplus-bx">*尊敬的{{coupondet.student_name}}的家长,您的孩子剩余：{{coupondet.coupon_surplus}} 个聪明豆</div> -->
      <div class="bot-normal-item">
        <label>券号</label>
        <div class="intro-text">{{coupondet.coupon_num}}</div>
      </div>
      <div class="bot-normal-item">
        <label>优惠说明</label>
        <div class="intro-text">{{coupondet.name}}</div>
      </div>
      <div class="bot-normal-item">
        <label>有效期</label>
        <div class="intro-text">{{coupondet.coupon_start}} 至 {{coupondet.coupon_end}}</div>
        <!-- <div class="intro-text cqyx-text">长期有效</div> -->
      </div>
      <div class="bot-normal-item">
        <label>使用须知</label>
        <div class="intro-text">{{coupondet.intro}}</div>
      </div>
      <div class="bot-normal-item" v-if="qdcode">
        <label>二维码信息</label>
        
        <el-popover
          placement="top"
          popper-class="mypop-img"
          width="100%"
          trigger="click">
          <img  class="qdcode-img-big" :src="qdcode">
          <div slot="reference"><img  class="qdcode-img" :src="qdcode"></div>
        </el-popover>
      </div>
    </div>
    <!-- <div class="show-bg-img">
      <img class="big-img" :src="qdcode">
    </div> -->
  </div>
</template>

<script>
let _self;
export default {
  data() {
    return {
      coupondet: {},
      coupon_id: '', // 优惠券id
      student_id: '', // 学生id
      // qdcode: 'http://qr.liantu.com/api.php?text=155661596267610|openid', // 二维码
      qdcode: '', // 二维码
      coupondet: this.$api().couponcenterdet, // 学生中心优惠券详情请求地址
      couponcentercode:  this.$api().couponcentercode, // 获取二维码接口地址
    };
  },
  // activated() {
  // },
  beforeMount () {
    this.$store.commit('destroynav') // 销毁导航栏
  },
  mounted() {
    _self = this
    this.coupon_id = this.$route.params.id // 获取优惠券id参数
    this.student_id = this.$route.params.student_id // 获取优惠券id参数
    this.getDetail() // 获取优惠券详情
  },

  methods: {
    showcode() {

    },
    getDetail () {
      this.$http({
          methods: 'GET',
          url: _self.coupondet + '?id=' + _self.coupon_id 
          + "&student_id=" + _self.student_id,
      })
      .then (res => {
          if (res.data.code == 1) {
            var data = res.data.data
            _self.coupondet = data
            _self.qdcode = 'http://qr.liantu.com/api.php?text=' + data.coupon_num + '|' + data.openid
            // _self.getcode (_self.coupondet.coupon_num) // 通过订单号 coupon_num 获取二维码
          } else {
            alert(res.data.msg)
          }
      })
      .catch (err => {
          alert(err)
      })
    },
    getcode(couponnum) {
      this.$http({
          methods: 'GET',
          url: _self.couponcentercode + '?coupon_num=' + couponnum 
      })
      .then (res => {
          _self.qdcode = res.data
          console.log(res.data)
          // if (res.data.code == 1) {
          //   console.log(res.data)
          // } else {
          //   alert(res.data.msg)
          // }
      })
      .catch (err => {
          alert(err)
      })
    }
  }
};
</script>

<style lang="less" scoped>
.coupondetwrap {
  margin-top: -50px;
}
.list-item {
  position: relative;
}
.list-item .img-det {
  height: 105px;
}
.det-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.list-item .right .cou-price {
  margin-bottom: 0;
}
.qdcode-img {
  width: 150px;
  height: 150px;
}
.qdcode-img-big {
  width: 300px;
  height: 300px;
}
.mid-main {
  padding: 10px;
  .exchang-btn {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
  }

  .left-bx {
    padding-left: 4px;
    img {
      width: 30px;
      vertical-align: sub;
    }
    > span {
      padding-left: 6px;
    }
  }
  .right-btn {
    padding: 0 8px;
    line-height: 2.4;
    background-color: #009ffb;
    color: #fff;
  }

  .surplus-bx {
    margin-bottom: 10px;
    line-height: 1.4;
    margin-top: 4px;
    font-size: 14px;
    color: #808080;
  }

  .bot-normal-item {
    display: flex;
    line-height: 1.4;
    margin-top: 10px;
    label {
      width: 30%;
      font-size: 16px;
      color: #808080;
    }

    .intro-text {
      flex: 1;
    }
  }
}

</style>

