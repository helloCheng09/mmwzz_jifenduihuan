<template>
  <div id="coupondetwrap">
    <div class="det-top">
      <div
        class="list-item"
        data-id="item.coupon_id"
      >
        <img src="../assets/img/sc_img1@2x.png">
        <div class="right">
          <dd class="two-ellipsis">{{coupondet.coupon_title}}</dd>
          <dt class="two-ellipsis">{{coupondet.coupon_detail}}</dt>
          <div class="cou-price">
            <span class="price-num">{{coupondet.coupon_price}}</span>
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
          <span>聪明豆：{{coupondet.coupon_price}}</span>
        </div>
        <div class="right-btn">聪明豆兑换</div>
      </div>
      <div class="surplus-bx">*xxx的家长,您的孩子剩余：{{coupondet.coupon_surplus}} 个聪明豆</div>
      <div class="bot-normal-item">
        <label>优惠说明</label>
        <div class="intro-text">{{coupondet.coupon_detail}}</div>
      </div>
      <div class="bot-normal-item">
        <label>有效期</label>
        <!-- <div class="intro-text">{{coupondet.coupon_surplus}}</div> -->
        <div class="intro-text cqyx-text">长期有效</div>
      </div>
      <div class="bot-normal-item">
        <label>优惠说明</label>
        <div class="intro-text">{{coupondet.coupon_intro}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponlistarr: [
        {
          coupon_id: "1",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        }
      ],
      coupondet: {
        coupon_id: "1",
        coupon_city: "合肥",
        coupon_pic: "xxxx.png",
        coupon_title: "云课堂八折券",
        coupon_price: "188",
        coupon_detail: "这个优惠券用户云课堂的课程购买",
        coupon_intro: "1.每人一张。2.不得重复使用",
        coupon_start: "2019-04-12",
        coupon_end: "2019-05-24",
        coupon_surplus: "22344"
      },
      coupon_id: '',
    };
  },
  mounted() {
    this.coupon_id = this.$route.params.id // 获取优惠券id参数
    this.getDetail() // 获取优惠券详情
    
  },
  methods: {
    getDetail () {
      console.log(this.coupon_id)
    //    this.$http({
    //     method: 'GET',
    //     url: '/user',
    //     data: {
    //       name: 'virus'
    //     }
    //     .then(function (res) {
    //       console.log(res)
    //     })
    //     .catch(function (err) {
    //       console.log(err)
    //     })
    //  })
    }
  }
};
</script>

<style lang="less" scoped>
.list-item > img {
  height: 105px;
}
.list-item .right .cou-price {
  margin-bottom: 0;
}
.list-item .right dt {
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
    padding: 0 4px;
    line-height: 2.4;
    background-color: #009ffb;
    color: #fff;
  }

  .surplus-bx {
    margin-bottom: 10px;
    line-height: 2;
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

