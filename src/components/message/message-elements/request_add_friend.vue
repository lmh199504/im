<template>
	<div class="wrapper">
		<div v-if="isMine">
			<p class="title">请求添加对方为好友</p>
			<p class="freetext">加好友后可免费文字聊天</p>
		</div>
		<div v-else>
			<p class="title">是否加对方为好友？</p>
			<p class="freetext">加好友后可免费文字聊天</p>
			<div class="btn">
				<div class="agree">
					同意
				</div>
				<div class="refuse">
					拒绝
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isMine: {
			type: Boolean
		},
		payload: {
			type: Object,
			required: true
		},
		message: {
			type: Object,
			required: true
		}
	},
	data() {
		return {}
	},
	methods:{
		
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper
		padding 10px
		.title
			font-size 0.896rem
			color #333333
		.freetext
			margin-top 0.768rem
			color #666
			font-size 0.768rem
		.btn 
			margin-top 1.088rem
			display flex
			color #FFFFFF
			align-items center
			justify-content space-between
			.agree 
				width 2.88rem
				height 1.6rem
				border-radius 0.8rem
				background-color #478CF9
				font-size 0.768rem
				text-align center
				line-height 1.6rem
			.refuse
				width 2.88rem
				height 1.6rem
				border-radius 0.8rem
				background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(251, 90, 148, 0.96))
				font-size 0.768rem
				text-align center
				line-height 1.6rem
</style>
