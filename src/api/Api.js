import Vue from 'vue'

var baseUrl
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://www.mamawozaizhe.com/api/Coupon/'
    console.log('生产环境api') 
} else{
    baseUrl = 'http://www.mamawozaizhe.com/api/Coupon/'
    console.log( '开发环境api')
}

function api () {
    return {
        couponlisturl: baseUrl +  'couponlist2.html', // 优惠券列表
        coupondet: baseUrl + 'coupondetail', // 优惠券详情
        couponexchange: baseUrl + 'couponexchang', // 购买优惠券
        couponcenter: baseUrl + 'couponcenter', // 已经购买的优惠券列表
        couponcenterdet: baseUrl + 'couponcenter_detail', // 已经购买优惠券详情
        couponcentercode: baseUrl + 'qrcode', // 已经购买优惠券二维码
    }
}

Vue.prototype.$api = api