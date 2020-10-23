<template>
	<div class="agree_friend">
		<div class="message-send" v-if="isMine">
			我们已经是好友了，快送个小礼物打招呼吧。
		</div>
		<div class="message-received" v-else>
			我们已经是好友了，快送个小礼物打招呼吧。
		</div>
	</div>
</template>

<script>
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
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style lang="stylus" scoped>
	.agree_friend
		padding 10px
</style>
