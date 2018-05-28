//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    opened: 0
  },
  onLoad: function () {
    console.log(getCurrentPages())
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    this.setData({ opened: this.data.opened + 1 })
  }
})
