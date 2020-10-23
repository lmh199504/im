<template>
	<div class="wrapper">
		<div v-if="isMine" class="message-send" @click="showVipCenter">
			<img src="../../../assets/image/chuyu/message_item/white_phone.png" alt="">
			<div>已取消，点击重拨</div>
		</div>
		<div v-else class="message-received" @click="showVipCenter">
			<img src="../../../assets/image/chuyu/message_item/gray_phone.png" alt="">
			<div>已取消，点击重拨</div>
		</div>
		
		
		
		<SingleTip :show="showSingle" @close="close" />
	</div>
</template>

<script>
	import SingleTip from '../../../basecom/singleTip/index.vue'
	export default{
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
			return{
				showSingle: false
			}
		},
		components:{
			SingleTip
		},
		methods:{
			showVipCenter() {
				const number = Math.random() * 10
				if (number > 5) {
					this.showSingle = true
				} else {
					this.$messagebox({
						title: '初遇提醒您',
						message: '安装APP后才可使用此功能哦，快来下载吧，更多精彩在等你哦。',
						showCancelButton: true,
						confirmButtonText: '极速安装APP',
						cancelButtonText: '继续体验',
						confirmButtonClass: 'downappconfirm'
					})
				}
			},
			close() {
				this.showSingle = false
			},
		}
	}
</script>

<style lang="stylus" scoped>
.wrapper
	padding 10px
	.message-send
		color #FFFFFF
		font-size 0.896rem
		display flex
		align-items center
		img
			width 1.088rem
			height 1.088rem
			margin-right 0.896rem
	.message-received
		color #333333
		font-size 0.896rem
		display flex
		align-items center
		img
			width 1.088rem
			height 1.088rem
			margin-right 0.896rem		
</style>
