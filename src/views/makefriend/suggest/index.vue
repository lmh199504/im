<template>
	<div class="suggest">
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
			<div class="person_container">
				<div class="person_item" v-for="i in 2" :key="i" @click="$router.push(`/userInfo/${i}`)">
					<!-- <div class="online_state">
						<img src="../../../assets/image/chuyu/busy.png" alt="">
						<span>忙碌</span>
					</div> -->
					<div class="online_state">
						<img src="../../../assets/image/chuyu/online.png" alt="" class="Img">
						<div class="text">在线</div>
					</div>
					
					<div class="username">
						配齐
					</div>
					
					<div class="chatWith">
						<img src="../../../assets/image/chuyu/yuyin.png" alt="">
						<!-- <img src="../../../assets/image/chuyu/shiping.png" alt=""> -->
						<div>50聊币/分钟</div>
					</div>
					
					<img class="person_img" src="../../../assets/image/chuyu/001.jpg" alt="">
				</div>
				
				<div class="person_item banner_iten" >
					<img src="../../../basecom/downBanner/imgs/downImg.png" alt="" class="banner">
				</div>
				
				
				<div class="person_item" v-for="i in 30" :key="i+10" @click="$router.push(`/userInfo/${i}`)">
					<!-- <div class="online_state">
						<img src="../../../assets/image/chuyu/busy.png" alt="">
						<span>忙碌</span>
					</div> -->
					<div class="online_state">
						<img src="../../../assets/image/chuyu/online.png" alt="" class="Img">
						<div class="text">在线</div>
					</div>
					
					<div class="username">
						配齐
					</div>
					
					<div class="chatWith">
						<img src="../../../assets/image/chuyu/yuyin.png" alt="">
						<!-- <img src="../../../assets/image/chuyu/shiping.png" alt=""> -->
						<div>50聊币/分钟</div>
					</div>
					
					<img class="person_img" src="../../../assets/image/chuyu/001.jpg" alt="">
				</div>
			</div>
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
	.suggest
		overflow scroll
		height 100%
		padding 0 0.666666rem
		.mint-swipe
			height 6.666666rem
		.swiperImg
			width 100%
			height 6.666666rem
		.person_container 
			display flex
			justify-content space-between
			flex-wrap wrap
			margin-top 1rem
		.person_item 
			width 49%
			margin-bottom 0.6rem
			// background-color #000000
			height 11.666666rem
			position relative
			border-radius 0.32rem
			overflow hidden
			.banner
				width 100%
			.person_img 
				width 100%
				height 100%
			.username
				position absolute
				bottom 0.64rem
				left 0.64rem
				color #FFFFFF
				font-size 0.768rem
			.chatWith
				position absolute
				text-align right
				bottom 0.64rem
				right 0.64rem
				img
					height 1.216rem
				div
					font-size 0.768rem
					color #FFFFFF
			.online_state
				position absolute
				right 0.666666rem
				top 0.666666rem
				height 1.28rem
				width 3.2rem
				border-radius 0.64rem
				background-color rgba(0,0,0,0.4)
				line-height 1.28rem
				text-align center
				display flex
				align-items center
				.Img
					margin-right 0.32rem
					width 0.32rem
					height 0.32rem
					margin-left 0.512rem
				.text
					font-size 0.768rem
					color #FFFFFF
		.banner_iten
			width 100%
			height 7.68rem		
</style>

<style>
	.suggest .mint-loadmore-top{
		font-size: 1rem;
	}
	.suggest .mint-loadmore-bottom{
		font-size: 1rem;
	}
</style>
