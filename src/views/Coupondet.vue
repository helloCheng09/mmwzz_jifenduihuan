<template>
  <div id="coupondetwrap">
    <div class="det-top">
      <div
        class="list-item"
        data-id="item.coupon_id"
      >
        <img class="img-det" :src="coupondet.pic">
        <div class="right det-card">
          <dd class="two-ellipsis">{{coupondet.name}}</dd>
          <!-- <dt class="two-ellipsis">{{coupondet.coupon_detail}}</dt> -->
          <div class="cou-price">
            <span class="price-num">{{coupondet.price}}</span>
            <span class="price-dou">聪明豆</span>
          </div>
          <!-- <div class="exchange-btn">
            <span>聪明豆兑换</span>
          </div>-->
        </div>
      </div>
    </div>
    <div class="mid-main">
      <div class="exchang-btn">
        <div class="left-bx">
          <img src="../assets/img/sc_cmd@2x.png">
          <span>聪明豆：{{coupondet.price}}</span>
        </div>
        <div class="right-btn" @click="exchangecoupon">立即兑换</div>
      </div>
      <div class="surplus-bx">*尊敬的{{coupondet.student_name}}的家长,您的孩子剩余：{{coupondet.coupon_surplus}} 个聪明豆</div>
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
        <div class="intro-text" v-html="coupondet.intro"></div>
      </div>
    </div>
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
      coupondet: this.$api().coupondet, // 优惠券详情请求地址
      couponexchange: this.$api().couponexchange, // 聪明豆兑换优惠券地址
      coupondet_intro: '', // 优惠券的详情介绍（富文本）
    };
  },
  beforeMount () {
    this.$store.commit('destroynav') // 销毁导航栏
  },
  // activated() {
  // },
  mounted() {
    _self = this
    this.coupon_id = this.$route.params.id // 获取优惠券id参数
    this.student_id = this.$route.params.student_id // 获取优惠券id参数
    this.getDetail() // 获取优惠券详情
  },
  methods: {
    getDetail () {
      this.$http({
          methods: 'GET',
          url: _self.coupondet + '?id=' + _self.coupon_id + '&student_id=' +  _self.student_id,
      })
      .then (res => {
          if (res.data.code == 1) {
            var data = res.data.data
            _self.coupondet = data
            _self.coupondet_intro = data.intro
          } else {
            alert(res.data.msg)
          }
      })
      .catch (err => {
          alert(err)
      })
    },
    exchangecoupon(){
      this.$confirm('确定兑换此优惠券吗?', '妈妈我在这-优惠券', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'my-msgbox-confirm'
      }).then(() => {
        _self.sendexchange () // 发送请求 兑换优惠券
      }).catch(() => {
      });
      return false
    },
    sendexchange () {
        this.$http({
          methods: 'GET',
          url: _self.couponexchange + '?id=' + _self.coupon_id + '&student_id=' +  _self.student_id,
      })
      .then (res => {
          if (res.data.code == 1) {
            var data = res.data
            _self.$message({
              message: res.data.msg,
              center: true,
              duration: 1500,
              type: 'success',
            });
            setTimeout(() => {
              _self.$router.push({
                name: 'couponlist',
                params: {
                    id: this.student_id,
                }
              })
            }, 1500);
          } else {
            // alert(res.data.msg)
            // _self.$message.error(res.data.msg);
            _self.$message({
              message: '数据请求失败~',
              center: true,
              duration: 1500,
              type: 'error',
            });
          }
      })
      .catch (err => {
          _self.$message({
            message: '网络连接失败了~',
            center: true,
            duration: 1500,
            customClass: 'axios-wrong-msg el-message--error',
            iconClass: 'el-icon-guide'
          });
      })
    }
  }
};
</script>

<style lang="less" scoped>
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

