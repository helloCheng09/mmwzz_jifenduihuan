<template>
    <div>
        <div
        class="list-item"
        data-id="item.coupon_id"
      >
        <img src="../../assets/img/sc_img1@2x.png">
        <div class="right">
          <dd class="two-ellipsis">{{coupondet.coupon_title}}</dd>
          <dt class="two-ellipsis">{{coupondet.coupon_detail}}</dt>
          <div class="cou-price center-price">
            <!-- <span class="price-num">{{coupondet.coupon_price}}</span>
            <span class="price-dou">聪明豆</span> -->
          </div>
          <!-- <div class="exchange-btn">
            <span>聪明豆兑换</span>
          </div>-->
          <div class="daoqi-text">{{coupondet.coupon_end}}到期</div>
        </div>
      </div>
      <!-- {{count}} -->
    </div>

</template>


 <script>
  import store from '../../store.js'
export default {
  
     data() {
      return {
        coupondet: {
          coupon_id: "1",
          coupon_city: "合肥",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_intro: "1.每人一张。2.不得重复使用",
          coupon_start: "2019-04-12",
          coupon_end: "2019-03-24",
          coupon_surplus: "22344"
        },
            store: {}
      }
    },
    mounted() {
    },
    computed: {
      count() {
        return store.state.count
      }
    },
}

 </script>


<style  lang='less' scope>
.list-item .img-center {
  height: 105px;
}
.list-item .right .center-price {
  margin-bottom: 0;
}
</style>
