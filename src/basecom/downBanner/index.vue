<template>
	<div class="downBanner" v-show="showDown">
		<img src="./imgs/downImg.png" alt="" class="downImg" @click="downApp">
		<img src="./imgs/close.png" alt="" class="closeImg" @click="closeDown">
	</div>
</template>

<script>
export default {
	props:['showDown'],
	data() {
		return {
			
		}
	},
	methods:{
		closeDown() {
			this.$emit('closeDown')
		},
		downApp() {
			alert('下载APP')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.downBanner
		width 100%
		height 7.68rem
		text-align center
		position fixed
		bottom 3.52rem
		.downImg
			width 97%
			height 100%
			z-index 100
		.closeImg
			position absolute
			width 0.64rem
			top 0.64rem
			right 1.28rem
</style>
