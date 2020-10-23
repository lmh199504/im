<template>
	<div class="see_wx_message">
		<div v-if="isMine" class="message-send">你查看了对方的手机号</div>
		<div class="message-received">对方查看了你的手机号</div>
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
	methods: {}
}
</script>

<style lang="stylus" scoped>
.see_wx_message
	padding 10px
	color red
</style>
