<template>
	<div class="signTip" v-show="showSign">
		<div class="wrapper">
			<div class="close-btn">
				<img src="./imgs/btn.png" alt="" @click="closeSign">
			</div>
			<div class="line"></div>
			<div class="image-wrapper">
				<img src="./imgs/sign_bg.png" alt="" class="bgImg">
				<div class="top_title">
					<h4>每日签到领积分</h4>
					<p>VIP签到双倍奖励</p>
				</div>
				
				<div class="signContainer">
					<div class="singn_item">
						<div class="sign_title">
							<div class="circle circle_active"></div>
							<div class="day">第一天</div>
							<img src="./imgs/signed.png" alt="">
						</div>
						<div class="sign_reward sign_reward_active">
							<img src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
							<div>× 15</div>
						</div>
					</div>
					
					
					
					<div class="singn_item">
						<div class="sign_title">
							<div class="circle"></div>
							<div class="day">第一天</div>
							<img src="./imgs/signed.png" alt="">
						</div>
						<div class="sign_reward">
							<img src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
							<div>× 15</div>
						</div>
					</div>
					
					<div class="singn_item">
						<div class="sign_title">
							<div class="circle"></div>
							<div class="day">第一天</div>
							<img src="./imgs/signed.png" alt="">
						</div>
						<div class="sign_reward">
							<img src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
							<div>× 15</div>
						</div>
					</div>
					
					<div class="singn_item">
						<div class="sign_title">
							<div class="circle"></div>
							<div class="day">第一天</div>
							<img src="./imgs/signed.png" alt="">
						</div>
						<div class="sign_reward">
							<img src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
							<div>× 15</div>
						</div>
					</div>
					
					
					<div class="singn_item">
						<div class="sign_title">
							<div class="circle"></div>
							<div class="day">第一天</div>
							<img src="./imgs/signed.png" alt="">
						</div>
						<div class="sign_reward">
							<img src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
							<div>× 15</div>
						</div>
					</div>
					
					
					
				</div>
				
				<div class="sign_btn" @click="handleClickSign">
					点击签到
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:['showSign'],
	data() {
		return {}
	},
	methods:{
		closeSign() {
			this.$emit('closeSign')
		},
		handleClickSign() {
			
		}
	}
}
</script>

<style lang="stylus" scoped>
	.signTip
		width 100%
		height 100%
		position fixed
		left 0
		top 0
		background-color rgba(0,0,0,0.5)
		z-index 1112
		.wrapper
			padding-top 2.56rem
			width 20.48rem
			margin auto
			.close-btn
				width 20.48rem
				text-align right
				margin auto
				img
					width 1.728rem
					margin-bottom -0.384rem
			.line
				height 2.56rem
				width 1px
				background-color #FFFFFF
				position relative
				left 20.48rem - 0.864rem
			.image-wrapper
				position relative
				width 20.48rem
				margin auto
				.bgImg
					width 20.48rem
					position absolute
					z-index -1
				.top_title
					text-align center
					color #FFFFFF
					padding-top 0.768rem
					h4
						font-size 1.28rem
						margin-bottom 0.64rem
					p
						font-size 0.832rem
				.signContainer
					width 17.28rem
					// background-color red
					margin auto
					height 18.56rem
					margin-top 0.96rem
					overflow-y scroll
					padding 0.64rem 0.32rem
					box-sizing border-box
					.singn_item
						padding 0 0.64rem
						margin 0.96rem 0
						position relative
						.sign_title
							display flex
							align-items center
							position relative
							.circle
								width 0.704rem
								height 0.704rem
								background-color #999999
								border-radius 50%
								background-size cover
								margin-left -0.352rem
								margin-right 0.64rem
							.circle_active
								width 0.704rem
								height 0.704rem
								background-image url(imgs/circle.png)
								background-size cover
								margin-left -0.352rem
								margin-right 0.64rem
							.day
								font-size 0.96rem
								color #999999
								margin-right 0.64rem
							img
								width 2.432rem
								height 1.728rem
						.sign_reward
							display flex
							align-items center
							padding 0.64rem
							border-left 1px solid #999999
							img
								width 1.28rem
								margin-right 0.64rem
							div
								font-size 0.768rem
								color #EE45CC
						.sign_reward_active
							border-left 1px solid #EE45CC
				.sign_btn
					background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
					width 10.24rem
					height 2.56rem
					border-radius 1.28rem
					margin auto
					margin-top 0.64rem
					text-align center
					line-height 2.56rem
					color #FFFFFF
					font-size 1.024rem
</style>
