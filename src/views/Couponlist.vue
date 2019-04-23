<template>
  <div id="couponlistwrap">
    <ul class="list-bx">
      <li
        class="list-item"
        data-id="item.coupon_id"
        v-for="item in couponlistarr"
        :key="item.index"
      >
        <img src="../assets/img/sc_img1@2x.png">
        <div class="right">
          <dd class="two-ellipsis">{{item.coupon_title}}</dd>
          <dt class="two-ellipsis">{{item.coupon_detail}}</dt>
          <div class="cou-price">
            {{item.coupon_price}}
            <span>聪明豆</span>
          </div>
          <div class="exchange-btn">
            <span>聪明豆兑换</span>
          </div>
        </div>
      </li>
    </ul>
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
  </div>
</template>

<script>
let _self;
import router from "../router.js";
import { clearTimeout } from "timers";
import { constants } from "crypto";
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
      couponlistarr2: [
        {
          coupon_id: "1",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        },
        {
          coupon_id: "2",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        },
        {
          coupon_id: "3",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        },
        {
          coupon_id: "4",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        },
        {
          coupon_id: "5",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        },
        {
          coupon_id: "6",
          coupon_pic: "xxxx.png",
          coupon_title: "云课堂八折券",
          coupon_price: "188",
          coupon_detail: "这个优惠券用户云课堂的课程购买",
          coupon_city: "合肥"
        }
      ],

      loadingani: false,
      isover: false,
      mytimer: null
    };
  },
  beforeMount() {
    _self = this;
    console.log(this.couponlistarr);
  },
  mounted() {
    this.scrollTop();
    this.show();
  },
  methods: {
    show() {
      window.addEventListener("scroll", _self.scrollTop);
    },
    scrollTop() {
      let scrollTop = document.documentElement.scrollTop; //滚动条的高
      let documentTop = document.body.scrollHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      if (scrollTop + screenHeight >= documentTop) {
        //干你想干的事儿
        // console.log(scrollTop, documentTop, screenHeight, "加载更多"); 
        window.removeEventListener("scroll", _self.scrollTop); // 解除滚动监听事件
        this.loadingani = true;
        this.mytimer = setTimeout(() => {
            _self.couponlistarr2.forEach(item => {
                _self.couponlistarr.push(item)
            });
            
            console.log(_self.couponlistarr)
            _self.loadingani = false; // 关闭加载动画
            _self.show(); // 递归滚动监听时间
        }, 1000);
      }
    }
  }
};
</script>


<style scope lang='less'>
.list-bx {
}
.list-item {
  display: flex;
  padding: 10px;
  margin-bottom: 6px;
  background-color: #fff;
  > img {
    width: 58%;
    height: 134px;
    object-fit: cover;
    margin-right: 10px;
  }
  .right {
    flex: 1;
    dd {
      line-height: 1.2;
      margin-bottom: 4px;
    }
    dt {
      line-height: 1.2;
      font-size: 12px;
      color: #808080;
    }
    .cou-price {
      margin-bottom: 10px;
      font-size: 20px;
      color: #009ffb;
      > span {
        font-size: 14px;
        color: #808080;
      }
    }
    .exchange-btn {
      text-align: right;
      > span {
        display: inline-block;
        padding: 0 10px;
        line-height: 2;
        border-radius: 4px;
        color: #fff;
        background-color: #009ffb;
      }
    }
  }
}
</style>


