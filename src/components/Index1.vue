<template>
  <div class="app">
    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <!-- 轮播组件 -->

  </div>
</template>

<script>
export default {
  i18n: {
    "zh-CN": {
      placeholder: "请输入搜索关键词"
    },
    "en-US": {
      placeholder: "Placeholder"
    }
  },
  data: () => ({
    value: "",
    number: 4,
    baseUrl: "http://vue.wclimb.site" + "/images/",
    list: []
  }),
  created() {
    this.getinfo();
  },
  computed: {
    allLength() {
      return this.getLength(this.list[3]);
    },
    movieLength() {
      return this.getLength(this.list[0]);
    },
    tvLength() {
      return this.getLength(this.list[1]);
    }
  },
  methods: {
    getinfo() {
      this.$http.get("http://vue.wclimb.site/vi/list").then(data => {
        this.list = data.body.data;
        console.log(this.list);
      });
    },
    getLength(jsonData) {
      var ArryLength = 0;
      for (var item in jsonData) {
        ArryLength++;
      }
      return ArryLength;
    }
  }
};
</script>

<style  scoped>
html {
  background: rgb(242, 242, 242);
}
.van-search {
  padding: 0.5rem 15px;
  background-color: #9cc873 !important;
}
.van-swipe__track {
  /* background-color: red; */
}
.van-swipe-item {
  height: 100px;
  text-align: center;
}
/* .van-swipe-item:nth-of-type(odd) {
  background-color: deeppink;
}
.van-swipe-item:nth-of-type(even) {
  background-color: paleturquoise;
} */
.van-swipe {
  height: 205px;
  float: left;
  margin-top: 0.5rem;
}
.video_list {
  overflow: hidden;
  padding-top: 0.5rem;
  border-top: 0.2rem solid #f2f2f2;
}
.margin{
  margin-top:30px; 
}
/* a 标签 */
.van-row {
  display: block;
  font-weight: 600;
  font-size: 16px;
}
.van-col:first-of-type {
  border-left: 3px solid springgreen;
  padding-left: 5px;
  margin-left: 5px;
}
.van-row .van-col:nth-of-type(2) {
  float: right;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  top: 50%;
  transform: translateY(10%);
}
/* 字体图标对齐 */
.van-icon-arrow::before {
  font-size: 12px;
  content: "\F007";
  vertical-align: inherit;
}
.iconColor {
  color: #00896c;
}
/* 下面评分 */
.moviename {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 27px;
  left: 0;
  font-size: 13px;
  margin: 0.1rem 0;
  height: 1.5rem;
  line-height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.star {
  width: 100%;
  position: absolute;
  bottom: 10px;
  left: 0;
  margin: 0 auto;
}
.van-rate {
  display: inline-block;
}
.star span {
  font-size: 13px;
  /* float: right; */
  /* display: inline-block; */
  /* position: absolute;
	right: 10px;
	bottom: 2px; */
}
/* img */
.img {
  width: 130px;
  height: 150px;
  background-color: #fff;
  position: absolute;
}
.img img {
  width: 100%;
  height: 100%;
}
/* 电影滑块内容 */
</style>