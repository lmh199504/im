<template>
	<div class="nearby">
		<!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

		</mt-loadmore> -->
		
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img class="swiperImg" src="../../../assets/image/chuyu/banner2.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img class="swiperImg" src="../../../assets/image/chuyu/banner2.png" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img class="swiperImg" src="../../../assets/image/chuyu/banner2.png" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="nearbyNoData">
			<img src="../../../assets/image/chuyu/nearbynodata.png" alt="">
			<div class="noDatatext">打开定位才可以获得附近女神的信息哦</div>
			<div class="noDataBtn">
				立即开启
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			allLoaded: false
		}
	},
	methods: {
		loadTop() {
			setTimeout(() => {
				this.$refs.loadmore.onTopLoaded()
			}, 1500)
		},
		loadBottom() {
			// window.console.log('触底加载')
			setTimeout(() => {
				this.$refs.loadmore.onBottomLoaded()
			}, 3000)
		}
	}
}
</script>

<style lang="stylus" scoped>
.nearby
	overflow scroll
	height 100%
	padding 0 0.666666rem
	.mint-swipe
		height 6.666666rem
	.swiperImg
		width 100%
		height 6.666666rem
		
	.nearbyNoData 
		text-align center
		margin-top 5.333333rem
		img
			width 10rem
		.noDatatext 
			color #999999
			margin-top 2rem
			font-size 0.933333rem
		.noDataBtn 
			color #FFFFFF
			height 2rem
			width 9.333333rem
			text-align center
			line-height 2rem
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
			border-radius 1rem
			margin auto
			font-size 1rem
			margin-top 4.666666rem
</style>

<style>
.nearby .mint-loadmore-top {
	font-size: 1rem;
}
.nearby .mint-loadmore-bottom {
	font-size: 1rem;
}
</style>
