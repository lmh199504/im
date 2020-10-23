<template>
	<div class="phone_chat-element">
		<div class="top">
			<img src="../../../assets/image/chuyu/white_phone.png" alt="">
			<div>
				<p class="send_text">{{ isMine ? '发出一个语音邀请':'发来一个语音邀请' }}</p>
				<div class="coast">40钻石/分钟</div>
			</div>
		</div>
		<div class="bottom" @click="showSingle=true">{{  isMine ? '点击重拨':'点击回拨' }}</div>
		
		<SingleTip :show="showSingle" @close="close" />
	</div>
</template>

<script>
	import SingleTip from '../../../basecom/singleTip/index.vue'
	export default{
		props: {
			payload: {
				type: Object,
				required: true
			},
			message: {
				type: Object,
				required: true
			},
			isMine: {
				type: Boolean
			}
		},
		data() {
			return{
				showSingle:false
			}
		},
		components:{
			// MessageBubble
			SingleTip
		},
		created() {
			window.console.log(this.payload)
		},
		methods:{
			close() {
				this.showSingle = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.phone_chat-element
		.top
			display flex
			background linear-gradient(90deg, #F46AC0, #FB94E7)
			padding 5px
			align-items center
			border-radius 5px 5px 0 0
			img
				width 1.6rem
				height 1.6rem
				max-width 25px
				max-height 25px
				margin-right 10px
			.send_text
				color #FFFFFF
				font-size 14px
			.coast
				border-radius 5px
				background-color rgba(0,0,0,0.2)
				width fit-content
				color #FFFFFF
				margin-top 5px
				padding 1px 5px
		.bottom
			color #5EC256
			font-size 0.768rem
			text-align right
			padding 5px
			background-color #FFFFFF
			
</style>
