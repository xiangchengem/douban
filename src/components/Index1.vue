<template>
	<div>
		<!-- 搜索框 -->
		<van-search placeholder="请输入搜索关键词" v-model="value" />
		<!-- 轮播组件 -->
		<div class="video_list">
			<!-- 两端对齐 -->
			<ul>
				<li>
			<van-row type="flex" justify="space-between">
				<van-col span="9"> <a href="">全部</a></van-col>
				<van-col span="4"><a href="">更多
						<van-icon name="arrow" /></a></van-col>
			</van-row>
			<van-swipe :width="200" :show-indicators="false" v-for="item in list">
				<van-swipe-item >
					<a class="moviename">电影名</a>
					<van-rate v-model="number" disabled disabled-color="rgb(255, 210, 30)" />
				</van-swipe-item>
				<!-- <van-swipe-item>2
					<van-rate v-model="number" />
				</van-swipe-item>
				<van-swipe-item>3
					<van-rate v-model="number" />
				</van-swipe-item>
				<van-swipe-item>4
					<van-rate v-model="number" />
				</van-swipe-item> -->
			</van-swipe>
			</li>
			</ul>
		</div>
		<!-- 现在尝试不用轮播组件做一个滑块 -->
		<section class="video_list">
			<div class="video_list_header">
				<van-row type="flex" justify="space-between">
					<van-col span="9"> <a href="">电影</a></van-col>
					<van-col span="4"><a href="">更多
							<van-icon name="arrow" /></a></van-col>
				</van-row>
			</div>
			<ul>
				<li>
					<a href="">
						<div class="img"></div>
						<span class="moviename">电影名1</span>
						<van-rate v-model="number" disabled disabled-color="rgb(255, 210, 30)" />
					</a>
				</li>
				<li>
					<a href="">
						<div class="img"></div>
						<span class="moviename">电影名2</span>
						<van-rate v-model="number" disabled disabled-color="rgb(255, 210, 30)" />
					</a>
				</li>
				<li>
					<a href="">
						<div class="img"></div>
						<span class="moviename">电影名3</span>
						<van-rate v-model="number" disabled disabled-color="rgb(255, 210, 30)" />
					</a>
				</li>
				<li>
					<a href="">
						<div class="img"></div>
						<span class="moviename">电影名4</span>
						<van-rate v-model="number" disabled disabled-color="rgb(255, 210, 30)" />
					</a>
				</li>
			</ul>

		</section>
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
    number: "4",
    list: []
  }),
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.$http.get("http://vue.wclimb.site/vi/list").then(data => {
        this.list = data.body.data[0];
        console.log(data.body.data[0]);
        // console.log(data.body);
      });
    }
  }
};
</script>

<style  scoped>
.van-search {
  padding: 0.5rem 15px;
}
.van-swipe__track {
  height: 400px;
  /* background-color: red; */
}
.van-swipe-item {
  height: 100px;
  text-align: center;
}
.van-swipe-item:nth-of-type(odd) {
  background-color: deeppink;
}
.van-swipe-item:nth-of-type(even) {
  background-color: paleturquoise;
}
.van-swipe {
  height: 300px;
	float: left;
}
.video_list {
  padding-top: 0.5rem;
}
/* a 标签 */
.van-row {
  font-weight: 700;
  font-size: 18px;
}
.van-row .van-col:nth-of-type(2) {
  font-weight: 400;
  font-size: 14px;
}
/* 下面评分 */
.moviename {
  width: 100%;
  text-align: center;
  bottom: 40px;
  left: 0;
  font-size: 16px;
  margin: 0.1rem 0;
  height: 1.5rem;
  line-height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.van-rate {
  width: 100%;
  display: block;
  bottom: 10px;
  left: 0;
  margin: 0 auto;
}
/* 索引图标隐藏 */

/* 电影滑块内容 */
section {
  height: 100%;
	width: 100%;
	overflow: hidden;
}
section ul li {
  background-color: red;
	float: left;
	
}
section ul li a {
  display: block;
}
.img {
  height: 200px;
  width: 200px;
  background-color: deeppink;
}
section ul{
	width: 3000px;
}

</style>