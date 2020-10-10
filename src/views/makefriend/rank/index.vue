<template>
	<div class="nearby">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
					<img class="swiperImg" src="../../../assets/image/chuyu/banner.png" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="swiperImg" src="../../../assets/image/chuyu/banner.png" alt="">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="swiperImg" src="../../../assets/image/chuyu/banner.png" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</mt-loadmore>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			allLoaded:false
		}
	},
	methods: {
		loadTop() {
			setTimeout(() => {
				this.$refs.loadmore.onTopLoaded()
			},1500)
		},
		loadBottom() {
			// window.console.log('触底加载')
			setTimeout( () => {
				this.$refs.loadmore.onBottomLoaded()
			},3000)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.nearby
		overflow scroll
		height 100%
		.mint-swipe
			height 6.666666rem
		.swiperImg
			width 100%
			height 6.666666rem
</style>

<style>
	.nearby .mint-loadmore-top{
		font-size: 1rem;
	}
	.nearby .mint-loadmore-bottom{
		font-size: 1rem;
	}
</style>
