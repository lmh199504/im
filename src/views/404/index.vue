<template>
	<div class="notfound">
		<div class="notfoundText">
			页面不存在
		</div>
		<div class="goback" @click="$router.replace('/')">返回首页</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="stylus" scoped>
	.notfound
		width 100%
		.notfoundText
			text-align center
			margin-top 6.4rem
		.goback
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
			height 1.92rem
			width 6.4rem
			border-radius 0.96rem
			text-align center
			line-height 1.92rem
			font-size 0.768rem
			color #FFFFFF
			margin auto
			margin-top 19.2rem
</style>
