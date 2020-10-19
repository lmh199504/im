<template>
	<div class="callTip" v-show="showCall">
		<div class="wrapper">
			<div class="">
				<img src="./img/callbg.png" alt="" class="callBg" />
				<div class="userImg"><img src="../../assets/image/chuyu/001.jpg" alt="" /></div>
				<div class="username">灰色的回忆</div>
				<div class="invite_call">邀请你通话</div>
				<div class="invite_text">点击接听，不错过任何一次机会哦</div>

				<div class="rightNow">
					<div @click="rightNow">马上接听</div>
					<p>({{ time }}s)</p>
				</div>

				<div class="refuse" @click="closeCallTip">狠心拒绝</div>
			</div>
		</div>
		<singleTip :show="show" @close="close" />
	</div>
</template>

<script>
import SingleTip from '../singleTip/index.vue'
export default {
	data() {
		return {
			showCall: false,
			time: 60,
			show: false
		}
	},
	created() {
		this.$bus.$on('showCallTip', this.showCallTip)
		this.$bus.$on('closeCallTip',this.closeCallTip)
	},
	components: {
		SingleTip
	},
	methods: {
		showCallTip() {
			this.showCall = true
			this.timer = setInterval(() => {
				this.time--
				if (this.time <= 0) {
					clearInterval(this.timer)
					this.time = 60
					this.showCall = false
				}
			}, 1000)
		},
		closeCallTip() {
			this.showCall = false
			this.time = 60
		},
		close() {
			this.show = false
		},
		rightNow() {
			const number = Math.random()*10
			
			if(number > 5) {
				this.show = true
			}else{
				this.$messagebox({
					title: '初遇提醒您',
					message: '安装APP后才可使用此功能哦，快来下载吧，更多精彩在等你哦。',
					showCancelButton: true,
					confirmButtonText: '极速安装APP',
					cancelButtonText: '继续体验',
					confirmButtonClass: 'downappconfirm'
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.callTip
	position fixed
	top 0
	left 0
	width 100%
	height 100%
	background-color rgba(0, 0, 0, 0.5)
	z-index 100
	.wrapper
		width 19.2rem
		margin auto
		margin-top 8.96rem
		position relative
		animation fadeDown 0.4s ease
		.callBg
			width 19.2rem
			margin auto
			position absolute
			z-index -1
		.userImg
			text-align center
			padding-top 5.76rem
			img
				width 5.76rem
				height 5.76rem
				border-radius 50%
		.username
			text-align center
			color #666666
			font-size 0.768rem
		.invite_call
			color #343434
			font-size 0.96rem
			text-align center
			margin-top 1.216rem
		.invite_text
			color #666666
			font-size 0.768rem
			margin-top 0.32rem
			text-align center
		.rightNow
			height 2.56rem
			width 16rem
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
			border-radius 1.28rem
			margin auto
			text-align center
			color #FFFFFF
			margin-top 3.2rem
			div
				font-size 0.896rem
			p
				font-size 0.768rem
		.refuse
			text-align center
			color #9A9A9A
			font-size 0.832rem
			margin-top 0.32rem
	
@keyframes fadeDown
	0%
		margin-top 0
	100%
		margin-top 8.96rem
</style>


<style lang="stylus">
	.downappconfirm
		color #E14880
</style>