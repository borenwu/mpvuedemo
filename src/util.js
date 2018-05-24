//工具函数库
import config from './config'

export function get (url) {
    return new Promise((resolve,reject)=>{
        wx.request({
            url:config.host+url,
            success:function (res) {
                if(res.data.code==0){
                    resolve(res)
                }
                else{
                    reject(res)
                }
            }
        })
    })
}

export function showSuccess (text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}

// 显示繁忙提示
export function showBusy (text ){
    console.log('show busy')
    wx.showToast({
        title: text,
        icon: 'loading',
        duration: 10000
    })
}


// 显示失败提示
export function showModel (title, content){
    wx.hideToast();
    
    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}
