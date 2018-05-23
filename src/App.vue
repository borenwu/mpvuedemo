<script>
    import {get} from './util'
    import qcloud from 'wafer2-client-sdk'
    import config from './config'
	export default {
		async created(){
		    // const res = await get('/weapp/demo')
		    // console.log(123,res)
            // 设置登录地址
            qcloud.setLoginUrl(config.loginUrl);
            qcloud.login({
                success: function (userInfo) {
                    console.log('登录成功', userInfo);
                },
                fail: function (err) {
                    console.log('登录失败', err);
                }
            });
        }
	}
</script>

<style scoped>

</style>
