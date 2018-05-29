Component({
  data: {},
  behaviors: [],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    movieInfo: {
      type: 'object'
    }/* type,value,observer */
  },
  methods: {
    tapHandler: e => { }
  },
  created: function () { console.log(this) },
  attached: function () { },
  ready: function () { },
  moved: function () { },
  detached: function () { },
  relations: {},
  externalClasses: [],
  options: {}
})