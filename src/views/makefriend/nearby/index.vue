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
		<div class="nearbyNoData" v-if="false">
			<img src="../../../assets/image/chuyu/nearbynodata.png" alt="">
			<div class="noDatatext">打开定位才可以获得附近女神的信息哦</div>
			<div class="noDataBtn">
				立即开启
			</div>
		</div>
		
		<div class="nearContainer">
			<div class="nearItem" v-for="n in 10" :key="n">
				<div class="left">
					<div>
						<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					</div>
					<div>
						<div class="username">灰色的回忆</div>
						<div class="usersex">
							<img src="../../../assets/image/chuyu/sex_girl.png" alt="" />
							<div class="userage">21</div>
						</div>
						<div class="user_desc">我很无聊，快来找我玩呀!我在等你哦快来找我玩呀!我在等你哦快来找我玩呀!我在等你哦....</div>
					</div>
				</div>
				<div class="right">
					<img src="../../../assets/image/chuyu/chat_msg_active.png" alt="">
					<img src="../../../assets/image/chuyu/chat_video.png" alt="">
				</div>
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
	.nearContainer 
		margin-top 1.28rem
		.nearItem 
			display flex
			justify-content space-between
			border-bottom 1px solid #F3F3F3
			margin-bottom 0.64rem
			.left
				display flex
				.userheader 
					width 3.84rem
					height 3.84rem
					border-radius 50%
					margin-right 0.64rem
				.username
					font-size 0.768rem
					color #333
				.usersex 
					width 2.56rem
					height 1.024rem
					background-color #FF82AA
					border-radius 0.512rem
					display flex
					justify-content space-around
					line-height 1.024rem
					margin-top 0.512rem
					img
						width 0.64rem
						height 0.64rem
						margin-top 0.192rem
					.userage
						font-size 0.768rem
						color #FFFFFF
				.user_desc 
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
					font-size 0.768rem
					color #999999
					margin-top 0.32rem
					max-width 12.8rem
			.right
				// width 6.4rem
				display flex
				align-items center
				img
					width 1.728rem
					// height 1.728rem
					margin 0 0.32rem
</style>

<style>
.nearby .mint-loadmore-top {
	font-size: 1rem;
}
.nearby .mint-loadmore-bottom {
	font-size: 1rem;
}
</style>
