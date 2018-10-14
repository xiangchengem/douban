<template>
  <div class="app">
    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <!-- 轮播组件 -->
    <videolist></videolist>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" class="tabbar">
      <van-tabbar-item icon="wap-home">主页</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import VideoList from "./videoList/VideoList";
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
    active: 0
  }),
  created() {},
  computed: {},
  methods: {},
  components: {
    videolist: VideoList
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
.tabbar{
  border-top: 1px solid #ccc;
}
</style>