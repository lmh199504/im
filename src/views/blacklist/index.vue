<template>
	<div class="blacklist">
		<mt-header fixed title="黑名单">
			<router-link to="/setting" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<div class="blackWrapper">
				<div class="black_item" v-for="n in 10" :key="n">
					<div class="left">
						<img src="../../assets/image/chuyu/001.jpg" alt="" />
						<div class="username">浪胃仙</div>
					</div>
					<div class="right"><div class="remove" @click="removeBlack">移除</div></div>
				</div>
			</div>

			<div class="noData" v-if="false">
				<img src="../../assets/image/chuyu/heimingdan.png" alt="" />
				<p>添加到黑名单对的用户和你发消息你将不会看到，</p>
				<p>无法收到该消息</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		removeBlack() {
			this.$messagebox.confirm('确定将该好友移除黑名单吗？').then(() => {
				
			}).catch(() => {
				
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
.mint-header
	background-color #FFFFFF
	color #333333
.wrapper
	padding-top 3.84rem
	.noData
		text-align center
		img
			width 11.52rem
			margin-top 12.8rem
			margin-bottom 1.92rem
		p
			font-size 0.768rem
			color #9A9A9A
	.blackWrapper
		padding 1.28rem
	.black_item
		display flex
		justify-content space-between
		align-items center
		margin-bottom 1.28rem
		.left
			display flex
			align-items center
			img
				width 3.84rem
				height 3.84rem
				border-radius 50%
				margin-right 0.64rem
			.username
				color #343434
				font-size 0.96rem
		.remove
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
			width 3.84rem
			height 1.6rem
			border-radius 0.8rem
			line-height 1.6rem
			color #FFFFFF
			font-size 0.768rem
			text-align center
</style>

<style>
	.mint-msgbox-confirm{
		color: #EE46CC!important;
	}
</style>