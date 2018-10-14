<template>
<van-search placeholder="请输入搜索关键词" v-model="value" />
</template>

<script>
export default {
	 i18n: {
    'zh-CN': {
      placeholder: '请输入搜索关键词'
    },
    'en-US': {
      placeholder: 'Placeholder'
    }
  },
	data: () => ({
		value:''
	}),
	methods: {
  }
}

</script>

<style  scoped>

</style>