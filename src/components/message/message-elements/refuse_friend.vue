<template>
	<div class="agree_friend">
		<div class="message-send" v-if="isMine">
			你拒绝了对方的好友请求
		</div>
		<div class="message-received" v-else>
			对方拒绝了你的好友请求
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
		color red
</style>
