<template>
	<div class="find">
		<div class="title">
			<img src="../../assets/image/chuyu/find/title.png" alt="">
		</div>
		<div class="xinContainer">
			<div :class="['xin_item',`xin_item${i}`]" v-for="i in 8" :key="i">
				<img class="userheader" src="../../assets/image/chuyu/001.jpg" alt="">
				<div class="username">
					铭久源
				</div>
			</div>
		</div>
		
		<div class="shandian">
			<div class="circle1"></div>
			<div class="circle2"></div>
			<div class="circle3"></div>
			<div class="circle4"></div>
			<img src="../../assets/image/chuyu/find/shandian.png" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		mounted() {
			
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="stylus" scoped>
	.find
		height 100%
		background-image url(../../assets/image/chuyu/find/bg.png)
		background-size 100% 100%
		.title 
			text-align center
			padding-top 1.28rem
			img
				width 2.944rem
		.xinContainer 
			margin-top 3.2rem
			min-height 22.4rem
			position relative
			.xin_item
				text-align center
				position absolute
				.userheader 
					width 1.6rem
					height 1.6rem
					border-radius 50%
				.username
					font-size 0.768rem
					color #FFFFFF
			.xin_item1
				left 5.76rem
				top 0.64rem
			.xin_item2
				right 5.76rem
				top 0.64rem
			.xin_item3
				left 50%
				top 1.92rem
				transform translateX(-50%)
			.xin_item4
				left 2.56rem
				top 5.12rem
			.xin_item5 
				right 2.56rem
				top 5.12rem
			.xin_item6	
				left 6.4rem
				top 9.6rem
			.xin_item7
				right 6.4rem
				top 9.6rem
			.xin_item8
				left 50%
				top 12.8rem
				transform translate(-50%)
		.shandian
			text-align center
			position absolute
			bottom 9.6rem
			left 50%
			.circle1 
				width 6.4rem
				height 6.4rem
				background-color rgba(255,255,255,0.1)
				border-radius 50%
				margin auto
				position relative
				animation scale 1s infinite
				position absolute
				top 50%
				left 50%
				transform translate(-50%,-50%)
			.circle2 
				width 5.76rem
				height 5.76rem
				border-radius 50%
				background-color rgba(255,255,255,0.4)
				animation scale 1s infinite
				animation-delay 0.2s
				position absolute
				top 50%
				left 50%
				transform translate(-50%,-50%)
			.circle3
				width 5.12rem
				height 5.12rem
				border-radius 50%
				background-color rgba(255,255,255,0.4)
				animation scale 1s infinite
				animation-delay 0.4s
				position absolute
				top 50%
				left 50%
				transform translate(-50%,-50%)
			.circle4
				width 4.48rem
				height 4.48rem
				border-radius 50%
				background-color rgba(255,255,255,0.4)
				animation scale 1s infinite
				animation-delay 0.6s
				position absolute
				top 50%
				left 50%
				transform translate(-50%,-50%)	
			img	
				width 4.48rem
				height 4.48rem
				position absolute
				border-radius 50%
				top 50%
				left 50%
				transform translate(-50%,-50%)	
				
		@keyframes scale
			0%
				transform translate(-50%,-50%) scale(1)
			100%
				transform translate(-50%,-50%) scale(1.2)
</style>		
