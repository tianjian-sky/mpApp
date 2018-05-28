Page({
  data: {
    text: "电影",
    subTabs: [{
      title: "正在热映",
      index: 0,
      component: null
    }, {
        title: "即将上映",
        index: 0,
        component: null
    }],
    subTabIndex: 0
  },
  changeTab: function (e) {
    let target= e.target
    let dataSet = target.dataset
    this.setData({"subTabIndex": dataSet.tabindex})
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
  },
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    // hi: 'MINA'
  }
})