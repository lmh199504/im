<template>
	<div class="inviteBoy">
		<mt-header fixed title="我邀请的男性">
			<router-link to="/myprofit" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper" ref="bscroll">
			<div class="content">
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>

				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>

				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="invite_item">
					<img src="../../assets/image/chuyu/001.jpg" alt="" />
					<div class="username">灰色的回忆</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	data() {
		return {}
	},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.bscroll, {
				bounce: {
					top: true,
					bottom: true,
					left: true,
					right: true
				}
			})
		})
	},
	created() {}
}
</script>

<style lang="stylus" scoped>
.inviteBoy
	width 100%
	height 100%
	.mint-header
		background-color #FFFFFF
		color #333333
	.wrapper
		padding 1.28rem
		height 100%
		box-sizing border-box
		.content
			padding-top 3.84rem
		.invite_item
			display flex
			align-items center
			margin-bottom 1.28rem
			img
				width 3.84rem
				height 3.84rem
				border-radius 50%
				margin-right 1.28rem
			.username
				color #333333
				font-size 0.96rem
</style>
