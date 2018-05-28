<template>
    <div class="container">
        <div class="userinfo" @click='login'>
            <img :src="userinfo.avatarUrl" alt="">
            <p>{{userinfo.nickName}}</p>
            <button v-if='!userinfo.openId'  class="userinfo-nickname"  open-type='getUserInfo' @getuserinfo='login'>点击登录</button>
        </div>
        <YearProgress></YearProgress>

        <button v-if='userinfo.openId' @click='scanBook' class='btn'>添加图书</button>
    </div>
</template>
<script>
    import qcloud from 'wafer2-client-sdk'
    import YearProgress from '@/components/YearProgress'
    import {showSuccess,post, showBusy,showModal} from '@/util'
    import config from '@/config'
    export default {
        components: {
            YearProgress
        },
        data () {
            return {
                userinfo: {
                    avatarUrl: '../../static/img/user-unlogin.png',

                }
            }
        },
        methods: {
            async addBook(isbn){
                const res = await post('/weapp/addbook',{
                    isbn,
                    openid:this.userinfo.openId
                })
                if(res.title){
                    showModal('添加成功',`${res.title}添加成功`)
                }else{
                    showModal('添加失败')
                }
            },
            scanBook () {
                wx.scanCode({
                    success: (res) => {
                        if(res.result){
                            this.addBook(res.result)
                        }
                    }
                })
            },
            login () {
                let user = wx.getStorageSync('userinfo')
                const self = this
                if (!user) {
                    showBusy('正在登录')
                    qcloud.setLoginUrl(config.loginUrl)
                    qcloud.login({
                        success: function (userinfo) {
                            qcloud.request({
                                url: config.userUrl,
                                login: true,
                                success (userRes) {
                                    showSuccess('登录成功')
                                    wx.setStorageSync('userinfo', userRes.data.data)
                                    self.userinfo = userRes.data.data
                                }
                            })
                        }
                    })
                }
            }
        },
        onShow () {
            // console.log(123)
            let userinfo = wx.getStorageSync('userinfo')
            // console.log([userinfo])
            if (userinfo) {
                this.userinfo = userinfo
            }
            // console.log(this.userinfo)
        }
    }
</script>

<style lang='scss'>
    .container{
        padding:0 30rpx;
    }
    .userinfo{
        margin-top:100rpx;
        text-align:center;
        img{
            width: 150rpx;
            height:150rpx;
            margin: 20rpx;
            border-radius: 50%;
        }
    }
    .userinfo-nickname {
        font-size: 32rpx;
        color: #007AFF;
        background-color: white;
        border-color: #ff6842;
    }
    button::after{
        border: none;
    }
</style>
