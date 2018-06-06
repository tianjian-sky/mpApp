import HttpRequest from '../../utils/http.js'
console.log(HttpRequest)
function getList (cb1,cb2) {
console.log('---')
  HttpRequest.http.requestDouban({
    url: 'movie/top250',
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