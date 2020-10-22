<template>
	<div class="privacy">
		<mt-header fixed title="隐私条框">
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<!-- <router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link> -->
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<iframe src="https://www.chuyuol.com/agreement/privacy.html" frameborder="0" class="iframe_wrapper" ref="iframe"></iframe>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {
		
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
.privacy
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
