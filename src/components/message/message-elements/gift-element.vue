<template>
	<div class="gifContainer">
		<div><img :src="messageContent.giftImg" alt="" class="giftImg" /></div>
		<div>
			<p>{{ messageType == 'GIFT_MESSAGE' ? '您收到' : 'TA向您求赏' }} {{ messageContent.giftNum }} {{ messageContent.giftUnit }} {{ messageContent.giftName }}</p>
			<p>价值{{ messageContent.giftPrice }}钻石</p>
		</div>
	</div>
</template>

<script>
import MessageBubble from '../message-bubble'

export default {
	components: {
		MessageBubble
	},
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
		return {
			messageContent: '',
			messageType: ''
		}
	},
	computed: {},
	created() {
		this.messageContent = JSON.parse(JSON.parse(this.message.payload.data).messageContent)
		this.messageType = JSON.parse(this.message.payload.data).messageType
	}
}
</script>

<style lang="stylus" scoped>
.gifContainer
	display flex
	padding-left 10px
	.giftImg
		width 60px
	p
		line-height 8px
</style>
