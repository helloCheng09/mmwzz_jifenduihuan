// publicPath: process.env.NODE_ENV === 'production'
// ? '/public/coupon'
// : '/',
export default {
    api () {
        if (process.env.NODE_ENV === 'production') {
            return '生产环境api'
        } else{
            return '开发环境api'
        }

    }
}