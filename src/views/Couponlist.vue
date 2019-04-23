<template>
  <div id="couponlistwrap">
    <ul class="list-bx">
      <li
        class="list-item"
        data-id="item.coupon_id"
        v-for="item in couponlistarr"
        :key="item.index"
        @click="navtodetail(item.coupon_id)"
      >
        <img src="../assets/img/sc_img1@2x.png">
        <div class="right">
          <dd class="two-ellipsis">{{item.coupon_title}}</dd>
          <dt class="two-ellipsis">{{item.coupon_detail}}</dt>
          <div class="cou-price">
            <span class="price-num">{{item.coupon_price}}</span>
            <span  class="price-dou">聪明豆</span>
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
      mytimer: null,

      page: 1,
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
            if (_self.page == 3){
               _self.isover = true 
               return false
            }
            _self.page ++ // 页码增加
            _self.show(); // 递归滚动监听时间
        }, 1000);
      }
    },
    navtodetail (id) {
      router.push({
        name: 'coupondet',
        params: {
          id: id
        }
      })
    }

  }
};
</script>


<style scope lang='less'>
.list-bx {
}
// 优惠券列表公共样式
.list-item {
  display: flex;
  padding: 10px;
  margin-bottom: 6px;
  background-color: #fff;
  > img {
    width: 58%;
    height: 142px;
    object-fit: cover;
    margin-right: 10px;
  }
  .right {
    flex: 1;
    dd {
      height: 39px;
      line-height: 1.2;
      margin-bottom: 4px;
      
    }
    dt {
      height: 29px;
      margin-bottom: 4px;
      line-height: 1.2;
      font-size: 12px;
      color: #808080;
    }
    .cou-price {
      margin-bottom: 10px;
      font-size: 22px;
      color: #009ffb;
      
      .price-num {
        vertical-align: middle;
      }
      .price-dou {
        padding-left: 4px;
        font-size: 14px;
        color: #808080;
      }
    }
    .daoqi-text {
      margin-top: 10px;
      line-height: 1.2;
      color: #808080;
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


