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
            couponlisturl: baseUrl +  'couponlist.html',
            coupondet: baseUrl + 'coupondetail',
            couponexchange: baseUrl + 'couponexchang',
            couponcenter: baseUrl + 'couponcenter',
            couponcenterdet: baseUrl + 'couponcenter_detail',
        }
    }

Vue.prototype.$api = api