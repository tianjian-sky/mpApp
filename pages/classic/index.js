import { getList } from './top250.js'
Page({
  data: {
    text: "经典",
    top250Movies: [{
      "rating": {
        "max": 10,
        "average": 9.6,
        "stars": "50",
        "min": 0
      },
      "genres": [
        "犯罪",
        "剧情"
      ],
      "title": "肖申克的救赎",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054521/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
          },
          "name": "蒂姆·罗宾斯",
          "id": "1054521"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1054534/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
          },
          "name": "摩根·弗里曼",
          "id": "1054534"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041179/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg"
          },
          "name": "鲍勃·冈顿",
          "id": "1041179"
        }
      ],
      "collect_count": 1291238,
      "original_title": "The Shawshank Redemption",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1047973/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
          },
          "name": "弗兰克·德拉邦特",
          "id": "1047973"
        }
      ],
      "year": "1994",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
      },
      "alt": "https://movie.douban.com/subject/1292052/",
      "id": "1292052"
    }]
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
  //   getList(function (res) {
  //     console.log(res)
  //   })
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