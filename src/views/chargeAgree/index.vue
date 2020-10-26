<template>
	<div class="userAgreement">
		<mt-header fixed title="用户协议">
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<!-- <router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link> -->
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<iframe src="https://api.chuyuol.cn/contact/recharge/agreeNotop" frameborder="0" class="iframe_wrapper" ref="iframe"></iframe>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.iframe.onload = () => {
				window.console.log('加载完成')
			}
		})
	}
}
</script>

<style lang="stylus" scoped>
.userAgreement
	width 100%
	height 100%
	.mint-header
		background-color #FFFFFF
		color #333333
	.iframe_wrapper
		width 100%
		height 100%
		padding-top 40px
</style>
