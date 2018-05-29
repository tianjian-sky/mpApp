function getList (cb1, cb2) {
  let url = 'https://api.douban.com/v2/movie/top250'
  wx.request({
    url: url,
    method: 'GET',
    success: function (res) {
      cb1(res)
    },
    fail: function (res) {
      cb2(res)
    }
  })
}
module.exports = {
  getList
}