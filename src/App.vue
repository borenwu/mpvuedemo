<script>
    import {get} from './util'
    import qcloud from 'wafer2-client-sdk'
    import config from './config'
	export default {
		async created(){
		    console.log('start')
		    // const res = await get('/weapp/demo')
		    // console.log(123,res)
            // 设置登录地址
            // qcloud.setLoginUrl(config.loginUrl);
            // qcloud.login({
            //     success: function (userInfo) {
            //         console.log('登录成功', userInfo);
            //     },
            //     fail: function (err) {
            //         console.log('登录失败', err);
            //     }
            // });
        }
	}
</script>

<style>
    .text-footer{
        text-align: center;
        font-size: 12px;
        margin-bottom:5px;
    }
    .text-primary{
        color:#EA5149;
    }
    .btn{
        color:white;
        background:#EA5A49;
        margin-bottom: 10px;
        padding-left: 15px;
        padding-left: 15px;
        border-radius: 2px;
        font-size: 16px;
        line-height: 40px;
        height: 40px;
        width: 100%;
    }
    .btn:active{
        background: #FA5A49;
    }
</style>
