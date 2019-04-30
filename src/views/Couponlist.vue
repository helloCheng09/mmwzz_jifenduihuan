<template>
  <div id="couponlistwrap">
    <ul class="list-bx" ref="elememtList">
      <li
        class="list-item"
        :data-id="item.id"
        v-for="item in couponlistarr"
        :key="item.index"
        @click="gotodetail(item.id)"
      >
     
        <img :src="item.pic">
        <div class="right">
          <dd class="two-ellipsis">{{item.name}}</dd>
          <!-- <dt class="two-ellipsis">{{item.intro}}</dt> -->
          <div class="cou-price">
            <span class="price-num">{{item.price}}</span>
            <span class="price-dou">聪明豆</span>
          </div>
          <div class="exchange-btn">
            <span>兑换优惠券</span>
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
      couponlistarr: [],
      student_id: "",
      loadingani: false,
      isover: false,
      isnone: false,
      mytimer: "",
      loadtimer: "",
      page: 1,
      couponlisturl: this.$api().couponlisturl // 优惠券列表请求地址
    };
  },
  beforeMount() {
    _self = this;
    // 获取学生id
    this.student_id = this.$route.params.id; // 获取优惠券id参数
  },
  mounted() {
    this.$store.commit("creatnav"); // 生成导航栏
    this.scrollLoad(); // 首屏加载
    // 获取优惠券列表
    // this.show();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", _self.scrollLoad);
  },
  methods: {
    show() {
      window.addEventListener("scroll", _self.scrollLoad);
    },
    scrollLoad() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚动条的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高

      var documentTop = _self.$refs.elememtList.offsetHeight; //全部内容的高
      // _self.$message({
      //     message: scrollTop,
      //     center: true,
      //     duration: 1500,
      //     type: "error"
      //   });
      // console.log(scrollTop,  screenHeight, documentTop)
      if (scrollTop + screenHeight  >= documentTop) {
        window.removeEventListener("scroll", _self.scrollLoad); // 解除滚动监听事件
        this.loadingani = true;
        this.getlist({
          id: this.student_id,
          page: this.page
        });
        return false;
      }
    },
    // axios -> getlist
    // opion {id 学生id page分页页码}
    getlist(option) {
      this.$http({
        methods: "GET",
        url: _self.couponlisturl + "?id=" + option.id + "&page=" + option.page
      })
        .then(res => {
          if (res.data.code == 1 || res.data.code == 3) {
            // 获取成功
            let data = res.data.data;
            let total_page = data.total_page;
            let list = data.list;
            list.forEach(item => {
              _self.couponlistarr.push(item);
            });
            _self.loadingani = false; // 关闭加载动画
            if (_self.page >= total_page) {
              _self.isover = true;
              return false;
            }
              _self.page++; // 页码增加
            _self.show();
            // window.clearTimeout(_self.mytimer)
            // _self.mytimer = setTimeout(() => {
              
              var documentTop = _self.$refs.elememtList.offsetHeight; //全部内容的高
              console.log(documentTop)
              var screenHeight = window.screen.availHeight; //当前屏幕的高
              if (documentTop < screenHeight) {
                _self.getlist({
                  id: _self.student_id,
                  page: _self.page
                }); // 不足一屏加载
                return false;
              }
            // }, 0);

          
          } else {
            _self.loadingani = false; // 关闭加载动画
            _self.isnone = true;
            _self.$message({
              message: res.data.msg,
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
    gotodetail(id) {
      this.$router.push({
        name: "coupondet",
        params: {
          id: id,
          student_id: this.student_id
        }
      });
    }
  }
};
</script>

<style  lang='less' scope>
// 优惠券列表公共样式
#couponlistwrap {
  padding-top: 50px;
}
.list-item {
  display: flex;
  padding: 10px;
  margin-bottom: 6px;
  background-color: #fff;
  > img {
    width: 58%;
    height: 103px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 4px;
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
      text-align: right;
      margin-bottom: 4px;
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


