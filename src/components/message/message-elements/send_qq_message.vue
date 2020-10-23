<template>
	<div class="send_qq_message">
		<div v-if="isMine" class="message-send">
			<div class="top">
				<div class="left">
					<img src="../../../assets/image/chuyu/message_item/qq.png" alt="">
				</div>
				<div class="right">
					<p class="title">发送QQ号</p>
					<div class="price">
						价格：1000钻石
					</div>
				</div>
			</div>
			<div class="bottom">
				未被查看
			</div>
		</div>
		<div v-else class="message-received">
			<div class="top">
				<div class="left">
					<img src="../../../assets/image/chuyu/message_item/qq.png" alt="">
				</div>
				<div class="right">
					<p class="title">查看QQ号</p>
					<div class="price">
						价格：1000钻石
					</div>
				</div>
			</div>
			<div class="bottom">
				点击查看
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
			return {
				
			}
		},
		
	}
</script>

<style lang="stylus" scoped>
	.send_qq_message
		.top
			border-radius 5px 5px 0 0 
			background linear-gradient(90deg, #F469BF, #FB94E7)
			padding 10px
			display flex
			align-items center
			.left
				margin-right 0.64rem
				img
					width 1.728rem
					height 1.92rem
			.title
				color #FFFFFF
				font-size 0.896rem	
			.price
				border-radius 5px
				background-color rgba(0,0,0,0.2)
				padding 2px 5px 
				margin-top 0.32rem
		.bottom
			padding 5px
			text-align right
			color #5EC256
					
</style>
