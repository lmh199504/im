<template>
	<div class="singleTip" v-if="show">
		<div class="tip_wrapper">
			<img src="./imgs/tip_bg.png" alt="" class="bgImg" />

			<div class="innerText">
				<div class="openVip">开通VIP尊享</div>
				<div class="spcial">特权</div>

				<div class="explain">为VIP功能，平台提供双方信息保 护，一键开启与隔壁的Ta立即约会。</div>

				<div class="level_up" @click="levelUp">华丽升级</div>

				<div class="alsosingle" @click="close">继续单身</div>
			</div>

			<div class="close"><img src="./imgs/close.png" alt=""  @click="close"/></div>
		</div>
		<div class="mask"></div>
	</div>
</template>

<script>
export default {
	props: {
		show: Boolean
	},
	methods:{
		close() {
			this.$emit('close')
		},
		levelUp() {
			this.$emit('close')
			this.$bus.$emit('closeCallTip')
			this.$router.push('/vipCenter')
		}
	}
}
</script>

<style lang="stylus" scoped>
.singleTip
	position fixed
	height 100%
	width 100%
	top 0
	left 0
	z-index 10
	background-color rgba(0, 0, 0, 0.5)
	.tip_wrapper
		margin-top 8rem
		// width 21.248rem
		position relative
		.bgImg
			width 21.248rem
			position absolute
			z-index -1
		.innerText
			text-align center
			padding-top 5.12rem
			// background url('./imgs/tip_bg.png')
			.openVip
				font-size 1.792rem
				color #FFFFFF
			.spcial
				font-size 2.304rem
				color #FFFFFF
				font-weight bold
			.explain
				margin-top 3.2rem
				text-align center
				color #333333
				font-size 0.896rem
				padding 0 3.84rem
		.level_up
			width 12.16rem
			height 2.24rem
			border-radius 1.12rem
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
			margin auto
			line-height 2.24rem
			font-size 1.152rem
			color #FFFFFF
			margin-top 1.6rem
		.alsosingle
			width fit-content
			color #666666
			font-size 0.768rem
			text-align center
			margin auto
			margin-top 0.96rem
		.close
			text-align center
			margin-top 1.28rem
			img
				width 1.728rem
	.mask
		width 100%
		height 100%
</style>
