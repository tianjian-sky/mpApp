const app = getApp()
const env = app.env
const config = app['globalConfig'][env]
class Http {
  /**
   * opt参数同wx.request 
   */
  requestDouban (opt) {
    // let url = 'https://api.douban.com/v2/movie/top250'
    let url = config.API_BASE + '/douban/' + opt.url
    console.log(url)
    opt.url = url
    opt.header = {
      "content-type": "application/json" //TODO:
    }
    return wx.request(opt)
  }
}

module.exports = {
  http: new Http()
}