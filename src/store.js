import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    student_id: '', // 学生id
    total_num: '', // 家长中心 个人优惠券总数
    notuselist: [], // 未使用的优惠券列表
    hasusedlist: [], // 已使用优惠券列表
    pastlist: [], // 已过期优惠券列表
    navshow: false,
  },
  getters: {
    getTotalnum: state => state.total_num
  },
  mutations: {
    setstudentid(state, payload, ) {
      console.log(payload);
      state.student_id = payload
    }, 
    settotalnum(state, payload) {
      state.total_num  = payload.total_num
    },
    creatnav(state) {
      state.navshow = true
    },
    destroynav (state) {
      state.navshow = false
    }

  },
  actions: {
    // 未使用请求
    getnotuse({
      state,
      commit
    }, payload) {
      commit('setstudentid', payload.student_id)
      let url = Vue.prototype.$api().couponcenter + "?id=" + state.student_id + "&coupon_type=1" + "&page=" + payload.page; // 未使用优惠券请求地址
      axios.get(url)
        .then(res => {
          if (res.data.code == 1) {
            var data = res.data.data
            state.notuselist = data.list
            state.total_num = data.total_num
            console.log(state.notuselist)
          } else {
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
        })
    }
  }
})


export default store