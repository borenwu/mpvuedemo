//工具函数库
import config from './config'

// http get
export function get(url) {
    return request(url, 'GET')
}

export function post(url, data) {
    return request(url, 'POST', data)
}

// http post
function request(url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method: method,
            url: config.host + url,
            success: function (res) {
                if (res.data.code == 0) {
                    resolve(res.data.data)
                }
                else {
                    showModal('失败',res.data.data.msg)
                    reject(res)
                }
            }
        })
    })
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}

// 显示繁忙提示
export function showBusy(text) {
    console.log('show busy')
    wx.showToast({
        title: text,
        icon: 'loading',
        duration: 10000
    })
}


// 显示modal提示
export function showModal(title, content){
  wx.showModal({
    title,
    content,
    showCancel:false
  })
}
